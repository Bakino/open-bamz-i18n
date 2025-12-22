import { _CACHE } from "../i18nCache.mjs";

export default async function(payload, {query}){
    let result = await query(`SELECT current_database() as dbname`);
    let dbName = result.rows[0].dbname ;
    delete _CACHE[dbName] ;
}