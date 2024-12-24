/**
 * fejlécet itt generálom le
 * egy egyszerű tömböt járok be és minden esetben az aktuálisat adom meg a fejléc cellájának
 * ha a szerelmekhez érek akkor annak adok egy colSpan 2-t mert tudom hogy van tobb 2szerelmes is a koltok array-ban
 */
function generateFejlec(){ //fejlec legeneralasa
    const header = ["Szerző neve", "Korszak", "Szerelmek"]; //a header nevű tömbbe eltároljuk az adatokat amik stringek

    const headerRow = document.createElement('tr'); //a fejlécnek létrehozok egy sort
    thead.appendChild(headerRow); //thead elemhez hozzáadom az új sorunkat

    for (const item of header) { //a header tömböt for of-al járom be
        const headerCell = document.createElement('th'); //létrehozok egy uj cellat 
        headerCell.innerHTML = item; //a headerCell cellájának adom meg az éppen aktuális elemet
        headerRow.appendChild(headerCell); //végül a cellát hozzáadjuk a fejléc sorához
        if(item == "Szerelmek"){//ha a szerelmek oszlopnál tartunk akkor:
            headerCell.colSpan = "2";//adunk neki egy cellaegyesítést mivel tujduk hogy az arrayünkben úgyis van több szerelmes kötlő
        }
    }
}

/**
 * Ebben a függvényben generálom le a formot
 * A függvény a formFileds tömbünkön lépked végig és ezeket az értékeket adja meg a dinamikusan létrehozott formunknak
 */
function generateForm(){//létrehozunk egy függvényt amely le fogja generálni a formunkat
    const formFields = [//tömb lérehozása függvényen belül is lehet mert csak itt használom
        { id: "kolto_nev", label: "Költő neve:", type: "text"},//id, label, type megadása
        { id: "korszak", label: "Korszak:", type: "text"},//id, label, type megadása
        { id: "szerelem1", label: "Szerelme:", type: "text"},//id, label, type megadása
        { id: "masodik", label: "Volt másik szerelme?", type: "checkbox"},//id, label, type megadása
        { id: "szerelem2", label: "Szerelme:", type: "text"}//id, label, type megadása
    ];
    const form = document.createElement('form');//letrehozunk egy form elemet
    form.id = 'form';//itt adjuk meg neki az id-jét hogy majd később erre tudjunk hivatkozni
    document.body.appendChild(form);//az űrlapot hozzáadjuk a dokumentumunk törzséhez, bodyhoz
    
    for(const field of formFields){//itt járjuk be a formFields tömbnek minden egyes objektumát
        const div = document.createElement('div');//létrehozunk egy div elemet ami a formunk egyik sora lesz
        div.classList.add('field');//megadom a div-nek a field classt

        const label = document.createElement('label');//létrehozok egy label elemet
        label.innerText = field.label;//a label szövegét beállítjuk az aktuálisra
        label.htmlFor = field.id;//itt adom meg neki a html-forját azért dolgozhatok az id-ből mert az ugyan az mint a for a mi esetünkben
        div.appendChild(label);//hozzáadom a label1-et a divhez

        const input = document.createElement('input');//itt hozzuk létre az input mezőt, itt viszük majd be a szöveget
        input.type = field.type;//az input típusát a tömbből kapjuk ami vagy type vagy checkbox
        input.id = field.id;//itt adjuk meg az azonosítóját
        div.appendChild(input);//Az input mezőt hozzáadjuk a div-hez

        const div_error = document.createElement('div');//létrehozunk még egy divet ahol majd a hibaüzenetet fogjuk megjeleníteni
        div_error.classList = "error";//error osztályt hozzárendeljük
        div.appendChild(div_error);//a hibaüzenet div-et hozzáadjuk a div hez
        form.appendChild(div);//az imént összeállított div-et itt adjuk hozzá a formhoz
    }
    const button = document.createElement('button');//itt hozok létre egy új button elemet
    button.type = 'submit';//a típusát beállítjuk submitra
    button.innerText = 'Hozzáadás';//a gombon kiírva az lesz hogy Hozzáadás
    form.appendChild(button);//hozzáadjuk a gombunkat a formhoz
}


/**
 * ezáltal a függvény által jelenik meg a táblázatunk
 * 
 * @param {Array} koltok_array - ebben a tömmben tároljuk az összes olyan adatot amit szeretnénk majd 
 * látni a képernyőnkön, pl.:szerzo neve, korszak stb
 */
function renderTable(koltok_array){//itt definiálom a renderTable függvényemet
    for(const currentElement of koltok_array){//itt a ciklusunk végigiterál az array tömbünk elemein és a currentElement lesz az aktuális elem
        //sor létrehozása
        const tbodyRow = document.createElement('tr');//létrehozok egy tr elemet ami az első sor lesz a tablazatban
        tbody.appendChild(tbodyRow);//hozzaadom a tbody-hoz  

        const szerzo = document.createElement('td');//letrehozok egy td elemet
        szerzo.innerHTML = currentElement.szerzo;//az aktuális elem (currentElement) szerzo tulajdonságának értéke lesz itt megjelenítve 
        tbodyRow.appendChild(szerzo);//hozzáadja az első sorhoz

        const korszak = document.createElement('td');//letrehozok egy td elemet
        korszak.innerHTML = currentElement.korszak;//az aktuális elem (currentElement) korszak tulajdonságának értéke lesz itt megjelenítve 
        tbodyRow.appendChild(korszak);//hozzáadjuk a cellát a sorhoz 

        const szerelem1 = document.createElement('td');//letrehozok egy td elemet
        szerelem1.innerHTML = currentElement.szerelem1;//az aktuális elem (currentElement) szerelem tulajdonságának értéke lesz itt megjelenítve 
        tbodyRow.appendChild(szerelem1);//hozzáadjuk a cellát a sorhoz 


        
        if(currentElement.szerelem2 !== undefined){//itt ellenőrizzük azt hogy az aktuális szerelem2 és a szerelem2 nem egyenlő-e undefineddel, és ha egyik sem az(undefined), csak akkor fut le tovább a kód

        //headerCell3.colSpan = "2"//Ha idáig lefutott a kódunk akkor biztosan szükség lesz cellaegyesítésre és azt pedig itt adjuk meg a headerCell3 valtozonak

        const szerelem2 = document.createElement('td');//letrehozok egy td elemet
        szerelem2.innerHTML = currentElement.szerelem2;//az aktuális elem (currentElement) szerelem2 tulajdonságának értéke lesz itt megjelenítve 
        tbodyRow.appendChild(szerelem2);//hozzáadja a második sorhoz

        szerelem2.className = "column"//megadok neki egy classnamet hogy ez is be legyen szinezve
        }
        if(currentElement.szerelem2 === undefined){//a az aktuális második szerelem undefined akkor:
            szerelem1.colSpan = "2";//a szerelem egy cellára colspant rakunk hogy össze legyen vonva
        }
    }
}

/**
 * ellenőrizzük hogy az aktuális input mező üres-e, hogyha igen akkor megjelenítünk egy hibaüzenetet alatta
 * 
 * @param {htmlElement} htmlElement - az az input mező amelyiket ellenőrizni szeretnénk
 * @param {string} errormessage - a hibauzenetnek a szövege
 * @returns {boolean} - a valid változónkkal tér vissza vagy true vagy false
 */
function egyszeruValidacio(inputHtmlelement, errormessage){//létrehozunk egy föggvényt két bemeneti paraméter
    let valid = true;//valid valtozo deklarálása
    if(inputHtmlelement.value === ""){//ellenőrizzük hogy a korszak nevének input mezője üres-e
        showError(inputHtmlelement, errormessage)
            valid = false;//a valid változónkat false-ra állítjuk ezáltal nem adódik majd a táblázatunkhoz új sor
    }
    return valid;//visszatérünk a valid valtozonkkal
}
/**
 * ha a checkbox be van pipalva, es az adott szerelem mezők uresek, 
 * hibaüzenet jelenik meg a megfelelo helyen és a validacio nem engedi az uj adat hozzaadasat
 * ha viszont minden hibatlanul ki van toltve akkor true értékkel tér vissza és hozzáadódik a táblázathoz
 * 
 * @param {*} szerelem1Input - az elso szerelem input mezo
 * @param {*} szerelem2Input - a masodik szerelem input mezo
 * @param {*} checkboxChecked - a checkbox ami meghatarozza, hogy van-e masodik szerelem
 * @param {*} errormessageSz1 - hiba uzenet szoveg az elso szerelemhez
 * @param {*} errormessageChck - hiba uzenet szoveg a checkboxhoz
 * @param {*} errormessageSz2 - hiba uzenet szoveg a masodik szerelemhez
 * @returns - visszater a valid valtozoval, ture / false
 */

function osszetettValidacio(szerelem1Input, szerelem2Input, checkboxChecked, errormessageSz1, errormessageChck, errormessageSz2){//létrehozok egy függvényt ami sok bemeneti paramétert vár
    let valid = true;//valid változónk megadása
    if(checkboxChecked.checked === true && szerelem1Input.value === "" && szerelem2Input.value !== ""){//ha a checkboxunk be van pipálva és a szerelem1 üres de a szerelem2 meg nem akkor:
        showError(szerelem1Input, errormessageSz1)
            valid = false;//a valid változónkat false-ra állítjuk ezáltal nem adódik majd a táblázatunkhoz új sor
    }
    if(checkboxChecked.checked === true && szerelem1Input.value !== "" && szerelem2Input.value === ""){//ha a checkboxunk be van pipálva és a szerelem2 üres de a szerelem1 meg nem akkor:
        showError(szerelem2Input, errormessageSz2)
            valid = false;//a valid változónkat false-ra állítjuk ezáltal nem adódik majd a táblázatunkhoz új sor
    }
    if(checkboxChecked.checked === true && szerelem1Input.value === "" && szerelem2Input.value === ""){//ha a checkboxunk be van pipálva és a szerelem1 üres és a szerelem2 is akkor:
        showError(checkboxChecked, errormessageChck)
            valid = false;//a valid változónkat false-ra állítjuk ezáltal nem adódik majd a táblázatunkhoz új sor
        
    }
    return valid;//visszatérünk ezzel a változónkkal
}

/**
 * Ez egy segédfüggvény, ezáltal az egyszeruValidation függvényembe csak meg kell ezt hívni és meg is lesz jelenítve a hibaüzenet
 * 
 * 
 * @param {htmlElement} inputHtmlelement - ehhez a htmlelementhez kell hozzárendelni a hibaüzenetet
 * @param {string} errormessage - az aktuális megjelenítendő hibaüzenet
 */
function showError(inputHtmlelement, errormessage){//itt hozzuk létre a függvényünket
    const errorPlace = inputHtmlelement.parentElement.querySelector('.error');//az aktuális html elem szuloelemeben keresünk egy olyan elemet ami rendelkezik az error classal
    if(errorPlace !== undefined){//hogyha van ilyen hely ahol meg tudja jeleníteni az errormessaget akkor:
        errorPlace.innerHTML = errormessage;//megadjuk neki a bemeneti paraméterből a hiaüzenetet (stringet) és itt is iratjuk ki
    }
}
/**
 * itt váltjuk ki a colgroupos kódismétlést
 * egy komplex objektumot járunk be és mind a 3 esetben hozzárendelünk egy classt a colokhoz csak a középsőnek nem adok meg semmit
 * 
 */
function colgroupFuggveny() { //létrehozunk egy függvényt a colgroup elem hozzáadásához
    const colgroup = document.createElement('colgroup'); //letrehozzuk a colgroup elemet
    table.appendChild(colgroup); //hozzaadjuk a table elemhez a colgroup elemet

    const oszlopok = [//definiáljuk a komplex objektumot, amely tartalmazza az oszlopok jellemzőit
        {addClass: "column"}, //az első oszlophoz hozzáadjuk a "column" class-ot
        {addClass: "" }, //a második oszlophoz nem adunk hozzá class-ot
        {addClass: "column" } //a harmadik oszlophoz is hozzáadjuk a "column" class-ot
    ];

    //vegigiterálunk az oszlopok tömbjén, és minden oszlophoz létrehozzuk a col elemet
    for (const elem of oszlopok) { //minden egyes oszlopra (elem) végrehajtjuk a műveleteket
        const col = document.createElement('col'); //letrehozzuk a col elemet

        col.className = elem.addClass; //beallitjuk a col elem class-ját az objektumban szereplő ertek alapjan
        colgroup.appendChild(col); //Hozzaadjuk a col elemet a colgroup elemhez
    }
}

