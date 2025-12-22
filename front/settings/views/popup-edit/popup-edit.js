/* Javascript */

view.loader = async ()=>{
    const { line, langs, mode } = view.route.params ;
    const translations = langs.map(lang=>({
        ...lang,
        translation: line[lang.lang]
    }))
    return { line, langs, translations, mode } ;
}

view.validate = ()=>{
    if(bootstrap.validateForm(/** @type HTMLFormElement */(view.querySelector("form")))){
        const line = {} ;
        line.key = view.data.line.key ;
        for(let t of view.data.translations){
            line[t.lang] = t.translation ;
        }
        view.closePopup(line) ;
    }
}