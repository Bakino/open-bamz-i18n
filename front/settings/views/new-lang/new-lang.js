/*global view*/

view.loader = async ()=>{
    view.waiterMessage = tr("Loading langs...") ;
    const allLangs = await bamz.get("/open-bamz-i18n/all-existing-langs") ;
    view.waiterMessage = ""

    const chosenLang = null;
    
    return { allLangs, chosenLang}
}

view.displayed = async ()=>{
    view.data.addListener("langCode", ()=>{
        view.data.chosenLang = view.data.allLangs.find(l=>l.lang === view.data.langCode) ;
    })
}

view.addLang = async ()=>{
    if(view.data.chosenLang){
        let result = await dbApi.db.i18n.lang.create({
            lang: view.data.chosenLang.lang,
            is_default: view.data.isDefault,
            country: view.data.chosenLang.country,
            description: view.data.chosenLang.localName +` (${view.data.chosenLang.englishName} - ${view.data.chosenLang.countryName})`,
        })

        view.data.langCode = null;
        view.data.chosenLang = null;
        view.data.isDefault = null;
        view.dispatchEvent("langsChanged", {newLang: result}) ;
        view.router.navigateTo("/") ;
    }

}