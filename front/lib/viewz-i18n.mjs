import { localizeDOM } from './helpers.mjs';
import { i18n } from "./i18n.mjs";

export default {
    globals: {
        tr: i18n.t,
        i18n: i18n,
    },
    htmlProcessors: [
        (el)=>{
            localizeDOM(el, i18n) ;
        }
    ]
}