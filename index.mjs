import i18next from 'i18next';
import {LanguageDetector, handle} from 'i18next-http-middleware' ;
import resourcesToBackend from 'i18next-resources-to-backend';
import { localizeDOM, extractTranslationStrings } from './front/lib/helpers.mjs';
import express from 'express';
import cldr from 'cldr' ;
// @ts-ignore
import countries from 'flag-icons/country.json' with { type: "json" }; 
import { all } from 'locale-codes' ;
import { _CACHE } from './i18nCache.mjs';


export const prepareDatabase = async ({ client, grantSchemaAccess }) => {
    

    await client.query(`CREATE SCHEMA IF NOT EXISTS i18n`);

    await client.query(`create table if not exists i18n.lang (
        lang varchar(5) primary key,
        country varchar(2),
        region varchar(2),
        description varchar,
        is_default boolean
    )`);

    await client.query(`CREATE OR REPLACE FUNCTION i18n.set_single_default_lang()
RETURNS TRIGGER AS $$
BEGIN
    -- Only proceed if the new or updated row has is_default set to true
    IF NEW.is_default THEN
        -- Set all other languages to is_default = false
        UPDATE i18n.lang
        SET is_default = false
        WHERE lang <> NEW.lang AND is_default = true;
    END IF;

    -- Return the new or updated row
    RETURN NEW;
END;
$$ LANGUAGE plpgsql`)

    await client.query(`DROP TRIGGER IF EXISTS i18n_ensure_single_default_lang ON i18n.lang`);

    await client.query(`CREATE TRIGGER i18n_ensure_single_default_lang
AFTER INSERT OR UPDATE OF is_default ON i18n.lang
FOR EACH ROW EXECUTE FUNCTION i18n.set_single_default_lang()`);

    await client.query(`create table if not exists i18n.key (
        key varchar(512) primary key
    )`);

    await client.query(`create table if not exists i18n.key_source (
        key varchar(512),
        file_path varchar,
        FOREIGN KEY(key) 
            REFERENCES i18n.key(key)
            ON DELETE CASCADE,
        CONSTRAINT key_source_pk PRIMARY KEY(key,file_path)
    )`);

    await client.query(`create table if not exists i18n.translation (
        key varchar(512),
        lang varchar(5),
        translation TEXT,
        FOREIGN KEY(key) 
            REFERENCES i18n.key(key)
            ON DELETE CASCADE,
        FOREIGN KEY(lang) 
            REFERENCES i18n.lang(lang)
            ON DELETE CASCADE,
        CONSTRAINT translation_pk PRIMARY KEY(key,lang)
    )`);

    await client.query(`create or replace function i18n.all_translations(
        lang text
      )
      returns JSON as
      $$
          let foundLang = plv8.execute("SELECT * FROM i18n.lang WHERE lang ilike $1", [lang]);
          if(foundLang.length === 0){
            //not found, search on country only
            foundLang = plv8.execute("SELECT * FROM i18n.lang WHERE country ilike $1", [lang.substring(0,2)]);
          }
          if(foundLang.length === 0){
            //not found, search default lang
            foundLang = plv8.execute("SELECT * FROM i18n.lang WHERE is_default = true");
          }
          if(foundLang.length === 0){
            //not found, take first one
            foundLang = plv8.execute("SELECT * FROM i18n.lang LIMIT 1");
          }
          if(foundLang.length === 0){
            //not found, return empty
            return {};
          } 
          let result = plv8.execute("SELECT jsonb_object_agg(key, translation) AS translations FROM i18n.translation WHERE lang = $1", [foundLang[0].lang]);

          return result[0]?.translations?result[0].translations:{};
      $$
    LANGUAGE "plv8"`);


    await client.query(`create or replace function i18n.remove_keys(
        keys text[], file_path text
      )
      returns JSON as
      $$
          for(let key of keys){
              plv8.execute("SELECT * FROM i18n.key_source WHERE key = $1 and file_path = $2", [key, file_path]);
              plv8.execute("DELETE FROM i18n.key WHERE key = $1 AND NOT IN (SELECT key FROM i18n.key_source WHERE key = $1)", [key]);
          }
          return { success: true };
      $$
    LANGUAGE "plv8"`);

    await client.query(`create or replace function i18n.create_keys_if_not_exists (
        keys text[], file_path text
      )
      returns JSON as
      $$
          for(let key of keys){
              plv8.execute("INSERT INTO i18n.key(key) VALUES ($1) ON CONFLICT (key) DO NOTHING", [key]);
              plv8.execute("INSERT INTO i18n.key_source(key, file_path) VALUES ($1, $2) ON CONFLICT (key, file_path) DO NOTHING", [key, file_path]);
          }
          return { success: true };
      $$
    LANGUAGE "plv8"`);


    await client.query(`CREATE OR REPLACE FUNCTION i18n.clear_cache()
        RETURNS TRIGGER AS $$
            plv8.execute("SELECT graphile_worker.add_job('runPluginTask', $1)", 
                [{plugin: 'open-bamz-i18n', task : 'tasks/cleanTrCache.mjs', params: {}}]);
        $$ LANGUAGE "plv8" SECURITY DEFINER`)
        
    await client.query(`DROP TRIGGER IF EXISTS i18n_clear_cache ON i18n.translation`);
        
    await client.query(`CREATE TRIGGER i18n_clear_cache
        AFTER INSERT OR UPDATE OR DELETE ON i18n.translation
        FOR EACH ROW EXECUTE FUNCTION i18n.clear_cache()`);


    await grantSchemaAccess("i18n", [
        { role: "admin", level: "admin" },
        { role: "user", level: "none" },
        { role: "readonly", level: "none" },
    ]) ;
}

export const cleanDatabase = async ({ client }) => {
    await client.query(`drop schema if exists i18n CASCADE`);

}



export const initPlugin = async ({ app, graphql, hasCurrentPlugin, loadPluginData, logger, runQuery, appFileSystems }) => {
    const router = express.Router();

    async function getI18n(appName){
        if(!_CACHE[appName]){
            const i18instance = i18next.createInstance();
            await i18instance
                .use(resourcesToBackend(async (lang)=>{
                    let translations = await graphql.runDbGraphql(appName, `mutation { i18n_all_translations(input: {lang: "${lang}"}) { result } }`) ;
                    return translations.i18n_all_translations.result;
                }))
                .use(LanguageDetector)
                .init({
                fallbackLng: "en",
               // debug: true 

            }) ;
            _CACHE[appName] = {} ;
            _CACHE[appName].i18n = i18instance;
            _CACHE[appName].middleware = handle(i18instance, {
                
            }) ;
        }
        return _CACHE[appName];
    }

    app.use(async (req, res, next) => {
        let appName = req.appName ;
        if(appName && appName !== process.env.DB_NAME){
            if(await hasCurrentPlugin(appName)){
                const {middleware} = await getI18n(appName) ;
                middleware(req, res, next) ;
            }else{
                next() ;
            }
        }else{
            next() ;
        }
    });

    router.get("/locales/:lang.json", async (req, res, next)=>{
        try{
            let appName = req.appName;
            let lang = req.params.lang;
                
            if(await hasCurrentPlugin(appName)){
                let translations = await graphql.runDbGraphql(appName, `mutation { i18n_all_translations(input: {lang: "${lang}"}) { result } }`) ;
                res.json(translations.i18n_all_translations.result);
            }else{
                next() ;
            }
        }catch(err){
            logger.error("Can't load locales %o", err)
            res.status(err.statusCode??500).json(err);
        }
    })

    router.get("/all-existing-langs", (req, res)=>{

        let languages = [] ;
        let allLocales = all;
        const languageCodes = cldr.extractLanguageDisplayNames('en');

        for(let country of countries){
            let locales = allLocales.filter(l=>l.tag && l.tag.toLowerCase().endsWith("-"+country.code)) ;
            for(let locale of locales){
                try{
                    const englishName = languageCodes[locale["iso639-1"]] ;
                    const localName = cldr.extractLanguageDisplayNames(locale["iso639-1"])[locale["iso639-1"]];
                    languages.push({
                        lang: locale.tag,
                        country: country.code,
                        countryName: country.name,
                        localName: `${localName}`,
                        englishName: `${englishName}`
                    });
                // eslint-disable-next-line no-unused-vars
                }catch(err){
                    //ignore error that happen when no local exists for this lang code
                }
            }
        }

        languages = languages.sort((l1, l2)=>l1.lang>l2.lang?1:-1) ;
        res.json(languages) ;
    });

    router.post("/analyze-tr-keys", async (req, res)=>{
        try{
            let appName = req.appName;               
            if(await hasCurrentPlugin(appName)){
                await analyzeAllFiles(appName) ;

                try{
                    const resultsSchema = await graphql.runDbGraphql(appName, `mutation {
                        openbamz_list_schema_and_tables(input: {}) {
                            result
                        }
                    }`) ;
                    const schemas = resultsSchema.openbamz_list_schema_and_tables.result;
                    for(let schema of schemas){
                        for(let table of schema.tables){
                            let keys = [] ;
                            if(table.description){
                                keys.push(table.description) ;
                            }
                            for(let column of table.columns){
                                if(column.description){
                                    keys.push(column.description) ;
                                }
                                if(column.type_desciption){
                                    // The description of the type is a JSON with enum values '[{"label":"The label","value":"The value"}]'
                                    try{
                                        let typeDesc = JSON.parse(column.type_desciption) ;
                                        if(Array.isArray(typeDesc)){
                                            for(let enumEntry of typeDesc){
                                                if(enumEntry.label){
                                                    keys.push(enumEntry.label) ;
                                                }
                                            }
                                        }
                                    }catch(err){
                                        //ignore error
                                    }
                                }
                            }
                            await updateKeysFromSource({filePath: `db://${schema.name}/${table.name}`, translationKeys: keys, appName}) ;
                        }
                    }
                }catch(err){
                    //ignore error, probably no db plugin
                }

                res.json({ success: true });
            }else{
                res.status(400).json({error: "Plugin not activated for this application"}) ;
            }
        }catch(err){
            logger.error("Can't load locales %o", err)
            res.status(err.statusCode??500).json(err);
        }
    });

  
    async function updateKeysFromSource({filePath, translationKeys, appName}){
        let existingKeys = await runQuery({database: appName}, "SELECT key FROM i18n.key_source WHERE file_path = $1", [filePath]) ;
            
        const removedKeys = existingKeys.rows.filter(r=>!translationKeys.includes(r.key)).map(r=>r.key) ;
        if(removedKeys.length>0){
            for(let key of removedKeys){
                await runQuery({database: appName}, "DELETE FROM i18n.key_source WHERE key = $1 AND file_path = $2", [key, filePath]) ;
                await runQuery({database: appName}, "DELETE FROM i18n.key WHERE key = $1 AND NOT EXISTS (SELECT 1 FROM i18n.key_source WHERE key = $1)", [key]) ;
            }
        }

        const newKeys = translationKeys.filter(k=>!existingKeys.rows.find(r=>r.key===k)) ;
        if(newKeys.length>0){
            for(let key of newKeys){
                await runQuery({database: appName}, "INSERT INTO i18n.key(key) VALUES ($1) ON CONFLICT (key) DO NOTHING", [key]) ;
                await runQuery({database: appName}, "INSERT INTO i18n.key_source(key, file_path) VALUES ($1, $2) ON CONFLICT (key, file_path) DO NOTHING", [key, filePath]) ;
            }
        }
    }

    async function analyzeAllFiles(appName){
        const fileSystem = appFileSystems.getFileSystem(appName) ;
        const allFiles = await fileSystem.listAllFiles() ;
        for(let filePath of allFiles){
            if(filePath.toLowerCase().endsWith(".html") || filePath.toLowerCase().endsWith(".js") 
            || filePath.toLowerCase().endsWith(".mjs")|| filePath.toLowerCase().endsWith(".jsx")){
                const fileData = await fileSystem.readFile(filePath, {encoding: "utf8"}) ;
                const translationKeys = extractTranslationStrings(fileData) ;
                await updateKeysFromSource({filePath, translationKeys, appName}) ;
            }
        }
    }



    appFileSystems.addListener("fileWritten", async ({appName, data,relativePath, branch})=>{
        //await sshManager.adjustFilePermissions(appName, path.join(branch,relativePath)) ;
        try{       
            console.log("onFileChange")
            // check plugin is activated for this application
            if(await hasCurrentPlugin(appName)){
                if(relativePath.toLowerCase().endsWith(".html") || relativePath.toLowerCase().endsWith(".js") 
                    || relativePath.toLowerCase().endsWith(".mjs")|| relativePath.toLowerCase().endsWith(".jsx")){
                    const translationKeys = extractTranslationStrings(data.toString("utf8")) ;
                    await updateKeysFromSource({filePath: relativePath, translationKeys, appName}) ;
                }
            }
        }catch(err){
            logger.error("Error while handling file change to check translations %o", err);
        }
    });
    
    loadPluginData(async ({pluginsData, appName})=>{
        if(pluginsData?.["open-bamz-viewz"]?.pluginSlots?.htmlProcessors){
            pluginsData?.["open-bamz-viewz"]?.pluginSlots?.htmlProcessors.push(({el, req})=>{
                localizeDOM(el, {
                    t: req.t
                }) ; 
            })
        }
        if(pluginsData?.["open-bamz-pwa"]?.pluginSlots?.urlsToCache){
            //always store dev that is the default lang
            pluginsData?.["open-bamz-pwa"]?.pluginSlots?.urlsToCache.push({
                url: `/open-bamz-i18n/locales/dev.json`
            });

            let resultLangs = await runQuery({database: appName}, "SELECT * FROM i18n.lang");
            for(let lang of resultLangs.rows){
                //for each lang, store the full lang (xx-XX) and lang only (xx)
                pluginsData?.["open-bamz-pwa"]?.pluginSlots?.urlsToCache.push({
                    url: `/open-bamz-i18n/locales/${lang.lang}.json`
                });
                if(lang.lang.length>2){
                    pluginsData?.["open-bamz-pwa"]?.pluginSlots?.urlsToCache.push({
                        url: `/open-bamz-i18n/locales/${lang.lang.substring(0,2)}.json`
                    });
                }
            }
        }

        if(pluginsData?.["open-bamz-packaging"]?.pluginSlots?.urlsToDownload){
            //always store dev that is the default lang
            pluginsData?.["open-bamz-packaging"]?.pluginSlots?.urlsToDownload.push({
                url: `/open-bamz-i18n/locales/dev.json`,
                dest: `open-bamz-i18n/locales/dev.json`
            });
            pluginsData?.["open-bamz-packaging"]?.pluginSlots?.urlToReplace.push({
                file: {filePath: "open-bamz-i18n/lib/i18n.mjs", baseUrl: "/plugin/open-bamz-i18n/lib/i18n.mjs" },
                urls: [{
                    url: "/open-bamz-i18n/locales/{{lng}}.json",
                    dest: `/static/open-bamz-i18n/locales/{{lng}}.json`,
                }]
            });

            let resultLangs = await runQuery({database: appName}, "SELECT * FROM i18n.lang");
            for(let lang of resultLangs.rows){
                //for each lang, store the full lang (xx-XX) and lang only (xx)
                pluginsData?.["open-bamz-packaging"]?.pluginSlots?.urlsToDownload.push({
                    url: `/open-bamz-i18n/locales/${lang.lang}.json`,
                    dest: `open-bamz-i18n/locales/${lang.lang}.json`
                });
                if(lang.lang.length>2){
                    pluginsData?.["open-bamz-packaging"]?.pluginSlots?.urlsToDownload.push({
                        url: `/open-bamz-i18n/locales/${lang.lang.substring(0,2)}.json`,
                        dest: `open-bamz-i18n/locales/${lang.lang.substring(0,2)}.json`
                    });
                }
            }
        }

        // if(pluginsData?.["open-bamz-code-editor"]?.pluginSlots?.changesListeners){
        //     pluginsData?.["open-bamz-code-editor"]?.pluginSlots?.changesListeners.push(onFileChange)
        // }

        if(pluginsData?.["open-bamz-code-editor"]?.pluginSlots?.javascriptApiDef){
            pluginsData?.["open-bamz-code-editor"]?.pluginSlots?.javascriptApiDef.push( {
                plugin: "open-bamz-i18n",
                url: "/plugin/open-bamz-i18n/i18n.d.ts"
            })
        }

        if(pluginsData?.["open-bamz-viewz"]?.pluginSlots?.viewzExtensions){
            pluginsData?.["open-bamz-viewz"]?.pluginSlots?.viewzExtensions.push( {
                plugin: "open-bamz-i18n",
                extensionPath: "/plugin/open-bamz-i18n/lib/viewz-i18n.mjs",
                "d.ts": `
                declare const i18n: i18n;
                declare const tr: TFunction<
                    [
                    ...$NormalizeIntoArray<DefaultNamespace>,
                    ...Exclude<FlatNamespace, InferArrayValuesElseReturnType<DefaultNamespace>>[],
                    ]
                >;`
            })
        }

        if(pluginsData?.["open-bamz-database"]?.pluginSlots?.dbFieldsExtensions){
            pluginsData?.["open-bamz-database"]?.pluginSlots?.dbFieldsExtensions.push( {
                plugin: "open-bamz-i18n",
                extensionPath: "/plugin/open-bamz-i18n/lib/db-components-i18n.mjs",
            })
        }
    })


    return {
        // path in which the plugin provide its front end files
        frontEndPath: "front",
        //lib that will be automatically load in frontend
        frontEndPublic: "lib",
        frontEndLib: "lib/i18n.mjs",
        router: router,
        //menu entries
        menu: [
            {
                name: "admin", entries: [
                    { name: "Translations", link: "/plugin/open-bamz-i18n/settings" }
                ]
            }
        ],

        //export some functions
        getI18n: getI18n
    }
}