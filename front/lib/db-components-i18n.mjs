import { i18n, waitForI18nReady } from "./i18n.mjs";

export default {
    generateLabelString: async function ({schema, table, column/*, el*/}){
        await waitForI18nReady ;
        if(column.description){
            return i18n.t(column.description) ;
        }
        return column.column_name ;
    },
    generateEnumLabel: async function ({defaultLabel}){
        await waitForI18nReady ;
        return i18n.t(defaultLabel) ;
    },
}