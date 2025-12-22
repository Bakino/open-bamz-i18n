import i18next from 'https://cdn.jsdelivr.net/npm/i18next@23.12.2/+esm';
//import { localizeDOM } from './helpers.mjs';
import i18nextBrowserLanguagedetector from 'https://cdn.jsdelivr.net/npm/i18next-browser-languagedetector@8.0.0/+esm'
import i18nextHttpBackend from 'https://cdn.jsdelivr.net/npm/i18next-http-backend@2.5.2/+esm'


export let waitForI18nReady = new Promise((resolve, reject)=>{

    window.addEventListener("openbamz.plugin.loaded", async ()=>{
        // const languageDetector = new i18nextBrowserLanguagedetector(null, {
        //     order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    
        // });
    
        try{

            console.log("start i18n")
        
            await i18next
                .use(i18nextHttpBackend)
                .use(i18nextBrowserLanguagedetector)
                .init({
                //debug: true,
                detection: {
                    order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
                },
                backend: {
                    loadPath: `/open-bamz-i18n/locales/{{lng}}.json`,
                }
            });
        
            console.log("i18n loaded")
        
        
            // if(window.VIEWZ_HTML_PROCESSORS){
            //     window.VIEWZ_HTML_PROCESSORS.push((el)=>{
            //         localizeDOM(el, i18n) ;
            //     })
            // }
    
            resolve() ;
        }catch(err){
            reject(err) ;
        }
    });
}) ;



export let i18n = i18next;