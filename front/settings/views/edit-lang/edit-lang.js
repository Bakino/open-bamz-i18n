view.loader = async ()=>{
    
    let lang = await dbApi.db.i18n.lang.getByLang(view.route.params.lang) ;
    return { lang, mode: "view" } ;

}

view.removeLang = async()=>{
    if(await dialogs.confirm(tr("Are you sure to remote this lang ?"))){
        await dbApi.db.i18n.lang.deleteByLang(view.data.lang.lang) ;
        view.dispatchEvent("langsChanged") ;
        await dialogs.info(tr("The lang has been removed")) ;
        view.router.navigateTo("/")
    }
}

view.save = async()=>{
    
    let lang = view.data.lang ;
    if(bootstrap.validateForm(/** @type HTMLFormElement */(view.querySelector("form")))){
        await dbApi.db.i18n.lang.updateByLang(lang.lang, {
            description: lang.description,
            is_default:  lang.is_default
        }) ;
        view.data.mode = "view" ;
        view.dispatchEvent("langsChanged") ;
    }
}