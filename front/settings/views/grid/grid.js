/* Javascript */


view.loader = async ()=>{
    const langs = await dbApi.db.i18n.lang.search();
    const keys = await dbApi.db.i18n.key.search();
    const translations = await dbApi.db.i18n.translation.search() ;

    let byKeys = {} ;
    for(let k of keys){
        byKeys[k.key] = { key: k.key } ;
        for(let l of langs){
            byKeys[k.key][l.lang] = "" ;
        }
    }

    for(let translation of translations){
        if(byKeys[translation.key]){
            byKeys[translation.key][translation.lang] = translation.translation ;
        }
    }

    for(let schema of dbApi.schemas){
        if(schema.schema === "public"){
            for(let table of schema.tables){
                for(let column of table.columns){
                    let columnNameTrKey = `${table.table_name}.${column.column_name}` ;
                    if(!byKeys[columnNameTrKey]){
                        byKeys[columnNameTrKey] = { key: columnNameTrKey } ;
                        for(let l of langs){
                            byKeys[columnNameTrKey][l.lang] = "" ;
                        }
                    }
                    if(column.data_type === "enum"){
                        for(let val of column.enum_values){
                            let enumTrKey = `enums.${table.table_name}.${column.column_name}.${val}` ;
                            if(!byKeys[enumTrKey]){
                                byKeys[enumTrKey] = { key: enumTrKey } ;
                                for(let l of langs){
                                    byKeys[enumTrKey][l.lang] = "" ;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return { langs, keys, translations, lines: Object.values(byKeys), byKeys: structuredClone(byKeys), mode: "view" } ;
}

agGrid.ModuleRegistry.registerModules([
    agGrid.AllCommunityModule, 
]);
let grid = null;
let columnDefsView, columnDefsEdit;

view.displayed = async ()=>{

    if(view.data.langs.length === 0){ return; }
    columnDefsEdit = [
        {
            field: "key",
            flex: 1,
            headerName: tr("Key"),
            cellRenderer: agGridBamzComponents.CopyRenderer,
            cellRendererParams:  {
                cellRenderer : params => params.value ? `<div class="me-1 overflow-hidden text-truncate" title="${params.value}">${params.value}</div>`:""
            }
        },
        {
            field: "actions",
            width: 100,
            headerName: tr("Actions"),
            cellRenderer: agGridBamzComponents.CellViewZRenderer,
            cellRendererParams: {
                html: `<button type="button" title="${tr("Edit in popup")}" class="btn btn-sm btn-primary mt-1" z-on-click="view.editInPopup(itemData)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                    </svg>
                </button>
                <button type="button" title="${tr("Delete line")}" class="btn btn-sm btn-outline-danger mt-1" z-on-click="view.removeKey(key)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                    </svg>
                </button>`,
            },
        },
    ].concat(view.data.langs.map(lang=>{
        return {
            field: lang.lang,
            flex: 1,
            headerName: lang.lang,
            editable: true,
            cellEditor: agGridBamzComponents.CellViewZEditor,
            cellEditorParams: {
                html: `<input type="text" z-bind="${lang.lang}" class="form-control" />`,
            },
            cellStyle: params => {
                if (!params.value) {
                    return {backgroundColor: '#f4b9b9'};
                }else{
                    let originalTr = view.data.byKeys[params.data.key]?view.data.byKeys[params.data.key][params.colDef.field]:null ;
                    if(!originalTr || originalTr !== params.value){
                        return {backgroundColor: '#d6e6ff'};
                    }
                }
                return null;
            }
        }
    })) ;

    columnDefsView = columnDefsEdit.filter(c=>c.field !== "actions").map(c=>({...c})) ;
    for(let c of columnDefsView){
        // @ts-ignore
        c.editable = false;
    }

    const gridOptions = {
        defaultColDef: {
            floatingFilter: true,           
            resizable: true,
            filter: "agTextColumnFilter",
            filterParams: {
                buttons : ['reset', 'apply'],
            }
        },
        columnDefs: columnDefsView,
        rowData: view.data.lines
    };

    const gridElement = /** @type {HTMLElement} */ (view.querySelector('#grid'));
    grid = agGrid.createGrid(gridElement, gridOptions);
}

view.changeMode = async (mode)=>{
    view.data.mode = mode ;

    if(mode === "edit"){
        grid.setGridOption("columnDefs", columnDefsEdit);
    }else{
        await view.refresh() ;
        grid.setGridOption("rowData", view.data.lines);
        grid.setGridOption("columnDefs", columnDefsView);
    }

    // Refresh the grid
    //grid.refreshCells({ force: true });
}

view.removeKey = (key)=>{
    let keyIndex = view.data.lines.findIndex(l=>l.key === key) ;
    view.data.lines.splice(keyIndex,1) ;
    grid.setGridOption("rowData", view.data.lines);
}

view.editInPopup = noWaiter(async (line)=>{
    const editedLine = await dialogs.routeModal({route: "/popup-edit/edit", openParams: {mode: "edit", line, langs: view.data.langs}, size: "lg"}) ;
    if(editedLine){
        for(let [k, v] of Object.entries(editedLine)){
            line[k] = v ;
        }
    }
    grid.refreshCells({ force: true });
});

view.addLine = noWaiter(async ()=>{
    const newLine = await dialogs.routeModal({route: "/popup-edit/create", openParams: {mode: "create", line: {}, langs: view.data.langs}, size: "lg"}) ;
    if(newLine){
        view.data.lines.push(newLine) ;
    }
    grid.setGridOption("rowData", view.data.lines);
});

view.save = async ()=>{
    let existing = {
        keys: await dbApi.db.i18n.key.search(),
        translations: await dbApi.db.i18n.translation.search(),
    }
    await dbApi.transaction(async (transac)=>{
        let deletedKeys = existing.keys.filter(ek=>!view.data.lines.some(k=>k.key === ek.key)) ;
        for(let key of deletedKeys){
            await transac.db.i18n.key.deleteByKey(key.key) ;
        }
        let newKeys = view.data.lines.filter(ek=>!existing.keys.some(k=>k.key === ek.key)) ;
        for(let key of newKeys){
            await transac.db.i18n.key.create({key: key.key}) ;
            await transac.db.i18n.key_source.create({key: key.key, file_path: "manual"})
        }

        for(let line of view.data.lines){
            for(let lang of view.data.langs){
                let existingTranslation = existing.translations.find(t=>t.key === line.key && t.lang === lang.lang) ;
                if(existingTranslation){
                    if(existingTranslation.translation !== line[lang.lang]){
                        await transac.db.i18n.translation.updateByKeyAndLang(line.key, lang.lang, {translation: line[lang.lang||""]})
                    }
                }else{
                    await transac.db.i18n.translation.create({ key: line.key, lang: lang.lang, translation: line[lang.lang||""]}) ;
                }
            }
        }
    })

    await view.refresh() ;
    grid.setGridOption("rowData", view.data.lines);
    view.changeMode("view") ;
}

/**
 * Export data to XLSX format in the browser.
 * @param {Object} data - The data structure for the Excel file.
 */
async function exportXls(data) {
    await loadScript("https://www.unpkg.com/exceljs@4.4.0/dist/exceljs.min.js") ;
    // @ts-ignore
    const workbook = new ExcelJS.Workbook();
    let incSheet = 0;

    for (let sheet of data.sheets) {
        let sheetName = sheet.sheetName || `Sheet ${++incSheet}`;
        sheetName = sheetName.substring(0, 29).replace(/[^a-zA-Z0-9 .]/g, "");
        sheet.sheetName = sheetName;

        console.info(`Export XLS, add sheet ${sheetName}`);

        const worksheet = workbook.addWorksheet(sheetName);

        if (sheet.colsWidth) {
            worksheet.columns = sheet.colsWidth.map(cw => ({ width: cw.width / 7.5 })); // Convert width from pixels to ExcelJS units
        }

        for (let row = 0; row < sheet.lines.length; row++) {
            let cellStyles = [];
            let rowData = [] ;
            for(let cell = 0; cell < sheet.lines[row].length; cell++){
                let cellData = sheet.lines[row][cell] ;
                if(cellData === null || cellData === undefined) cellData = "";
                let val = cellData ;
                if (typeof cellData === "object" && cellData.style) {
                    cellStyles[cell] = cellData.style ;
                    val = cellData.value ;
                }

                rowData.push(val) ;
            }

            const excelRow = worksheet.addRow(rowData);


            for(let c = 0; c < cellStyles.length; c++){
                const style = cellStyles[c] ;
                if(style){
                    let cell = excelRow.getCell(c+1) ;
                    if(style.font){
                        cell.font = style.font;
                    }
                    if(style.fill){
                        cell.fill = style.fill;
                    }
                    if(style.border){
                        cell.border = style.border;
                    }
                }
            }


            // Handle merges
            for (let col = 0; col < sheet.lines[row].length; col++) {
                const cellData = sheet.lines[row][col];
                if (typeof cellData === "object" && (cellData.colspan || cellData.rowspan)) {
                    worksheet.mergeCells(row + 1, col + 1, row + (cellData.rowspan || 1), col + (cellData.colspan || 1));
                }
            }
        }

        if (sheet.rowsHeight) {
            sheet.rowsHeight.forEach((rh, index) => {
                worksheet.getRow(index + 1).height = rh.height;
            });
        }
    }

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/octet-stream' });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = data.filename || "export.xlsx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

view.exportExcel = async ()=>{
    let border = {
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'thin'}
    };
    const data = {
        // @ts-ignore
        filename: `Translation-${window.BAMZ_APP}-${new Date()
        .toLocaleString('sv')
        .replace(' ', '-')
        .replace(':', '-')
        .replace(':', '-')}.xlsx`,
        sheets: [
            {
                sheetName: "Translations",
                colsWidth: [{ column: 0, width: 50 }],
                rowsHeight: [{ row: 0, height: 20 }],
                lines: [
                    [{value: "Key", style: {border}}].concat(view.data.langs.map(l=>({
                        value: l.lang, 
                        style: {
                            font: {bold: true}, border
                        }
                    }))),
                ].concat(view.data.lines.map(l=>{
                    return [{value: l.key, style: {border}}].concat(view.data.langs.map(lang=>{
                        let val = l[lang.lang] ;
                        if(!val){
                            return { value: "", style: {
                                border,
                                fill : {
                                    type: 'pattern',
                                    pattern:'solid',
                                    fgColor:{argb:'FFFF0000'}
                                }
                            }}
                        }
                        return {value: val, style: {border}};
                    })) ;
                }))
            }
        ]
    };

    exportXls(data);
}

async function readExcelFile(file){

    await loadScript("https://cdn.jsdelivr.net/npm/exceljs@4.4.0/dist/exceljs.min.js") ;
    
    
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = async function(e) {
            const data = e.target.result;

            // @ts-ignore
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.load(data);

            const firstSheet = workbook.worksheets[0] ;
            const lines = [] ;
            firstSheet.eachRow(function(row, rowNumber) {
                lines.push(row.values) ;
            });

            resolve(lines)
        };
        
        reader.onerror = function(ex) {
            reject(ex);
        };
    
        reader.readAsArrayBuffer(file);
    })
} ;


view.importExcel = async ()=>{
    const input = /** @type {HTMLInputElement} */ (document.createElement("INPUT")) ;
    input.type = "file" ;
    input.accept = ".xlsx" ;
    view.container.appendChild(input) ;
    input.focus() ;
    input.addEventListener("change", function(){
        if(input.files[0]){
            waiter(readExcelFile(input.files[0]).then(async (linesXls)=>{
                if(linesXls.length === 0){
                    return dialogs.error("Empty file") ;
                }

                const keys = linesXls[0] ;
                const linesToImport = [] ;
                for(let i=1; i<linesXls.length; i++){
                    const line = {} ;
                    for(let k=0; k<keys.length; k++){
                        line[keys[k]] = linesXls[i][k] ;
                    }
                    linesToImport.push(line) ;
                }


                if(!linesToImport[0].Key){
                    return dialogs.error("Missing key") ;
                }

                for(let lineXls of linesToImport){
                    let key = lineXls.Key ;
                    let line = view.data.lines.find(l=>l.key === key) ;
                    if(line){
                        for(let lang of view.data.langs){
                            if(lineXls[lang.lang]){
                                line[lang.lang] = lineXls[lang.lang] ;
                            }
                        }
                    }
                }

                grid.refreshCells({ force: true });
            })).then(()=>{
                view.container.removeChild(input) ;
            })
        }else{ 
            view.container.removeChild(input) ;
        }
    }.bind(this)) ;
    input.click() ;
    input.style.display = "none" ;
};

view.analyzeFiles = async ()=>{
    await bamz.post("/open-bamz-i18n/analyze-tr-keys") ;
    await view.refresh() ;
    grid.setGridOption("rowData", view.data.lines);
} ;