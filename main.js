const array = [//létrehozok egy array tömböt amibe eltárolom a szerzők dolgait
    {
        szerzo: "Balassi Bálint", //szerző neve
        korszak: "reformáció", //korszak
        szerelem1: "Losonczy Anna", //első szerelem
        szerelem2: "Dobó Krisztina" //második szerelem
    },
    {
        szerzo: "Csokonai Vitéz Mihály", //szerző neve
        korszak: "felvilágosodás", //korszak
        szerelem1: "Vajda Juliána" //egyetlen szerelem (nincs másik)
    },
    {
        szerzo: "Petőfi Sándor", //szerző neve
        korszak: "magyar romantika", //korszak
        szerelem1: "Mednyánszky Berta", //első szerelem
        szerelem2: "Szendrey Júlia" //második szerelem
    },
    {
        szerzo: "Ady Endre", //szerző neve
        korszak: "20. század", //korszak
        szerelem1: "Léda", //első szerelem
        szerelem2: "Csinszka" //második szerelem
    }
];


const header = {// itt hozok létre egy objektumot a táblázatunk fejlécének
    szerzo_nev: "Szerző Neve", // fejléc mezője a szerzo_nevehez
    korszak: "Korszak", // fejléc mezője a korszakhoz
    szerelmek: "Szerelmek" // fejléc mezője a szerelmekhez
};

//Itt hozzuk létre a táblázatot
const table = document.createElement('table');//létrehozok egy table elemet, ami majd a tablazatomat fogja tartalmazni
document.body.appendChild(table);//Hozzáadom a bodyhoz
//A colgroup elemek szabályozzák a táblázatunk oszlopainak stílusát

//A colgroup elemet hozzuk it létre
const colgroup = document.createElement('colgroup');//itt hozom létre a colgroup elemet
table.appendChild(colgroup);//hozzáadjuk a tablehoz

//itt definiálom az első oszlopot 
const col1 = document.createElement('col');//itt hozom letre a col elemet
col1.className = "column";//itt adok neki egy className-t ez alapjan talalja meg a css
colgroup.appendChild(col1);//a colgrouphoz adom hozzá

//itt definiálom a második oszlopot, nem adok neki semmit mert nem kell semmit megjelenítenie
const col2 = document.createElement('col');//itt hozom letre a col elemet
colgroup.appendChild(col2);//a colgrouphoz adom hozzá

//itt definiálom a harmadik oszlopot 
const col3 = document.createElement('col');//itt hozom letre a col elemet
col3.className = "column";//itt adok neki egy className-t 
colgroup.appendChild(col3);//a colgrouphoz adom hozzá

//A táblázat fejlécének létrehozása
const thead = document.createElement('thead');//thead elem letrehozasa itt tortenik ez lesz a fejlec
table.appendChild(thead);//hozzáadom a tablehez

//Létrehozunk egy sort a fejlécnek
const headerRow = document.createElement('tr');//itt hozok létre egy tr elemet 
thead.appendChild(headerRow);//hozzadaom a theadre

//Az első cella létrehozása a fejléc sorában
const headerCell = document.createElement('th');//itt egy th elemet hozok letre
headerCell.innerHTML = header.szerzo_nev;//a cellaban a header objektum szerzo_nev tulajdonsaganak az erteket iratjuk ki
headerRow.appendChild(headerCell);//a headerRow-hoz (fejléc sorához) adom hozzá

//A második cella létrehozása a fejléc sorában
const headerCell2 = document.createElement('th');//itt egy th elemet hozok letre
headerCell2.innerHTML = header.korszak;//a cellaban a header objektum korszak tulajdonsaganak az erteket iratjuk ki
headerRow.appendChild(headerCell2);//a headerRow-hoz (fejléc sorához) adom hozzá

//A harmadik cella létrehozása a fejléc sorában
const headerCell3 = document.createElement('th');//itt egy th elemet hozok letre
headerCell3.innerHTML = header.szerelmek;//a cellaban a header objektum szerelmek tulajdonsaganak az erteket iratjuk ki
headerRow.appendChild(headerCell3);//a headerRow-hoz (fejléc sorához) adom hozzá

//Itt hozzuk létre a táblázat törzsét
const tbody = document.createElement('tbody');//létrehozok egy tbody elemet
table.appendChild(tbody);//hozzáadjuk a tbody-t a table-hez

function renderTable(){//itt definiálom a renderTable függvényemet
    for(const currentElement of array){//itt a ciklusunk végigiterál az array tömbünk elemein és a currentElement lesz az aktuális elem
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

        headerCell3.colSpan = "2"//Ha idáig lefutott a kódunk akkor biztosan szükség lesz cellaegyesítésre és azt pedig itt adjuk meg a headerCell3 valtozonak

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

renderTable();//a rendeTable függvényt itt hívom meg

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Alapértelmezett viselkedés letiltása
    const kolto_nevHTMLelement = document.getElementById('kolto_nev');//elkerem azt a htmlelementet aminek a kolto_nev az id-ja
    const korszak_HTMLelement = document.getElementById('korszak');//elkerem azt a htmlelementet aminek a korszak az id-ja
    const szerelem1_HTMLelement = document.getElementById('szerelem1');//elkerem azt a htmlelementet aminek a szerelem1 az id-ja
    const volteMasikcheck = document.getElementById('masodik');//elkerem azt a htmlelementet aminek a masodik az id-ja
    const szerelem2_HTMLelement = document.getElementById('szerelem2');//elkerem azt a htmlelementet aminek a szerelem2 az id-ja

    const szerzo_value = kolto_nevHTMLelement.value;//a kolto_nevHTMLelement értékét beleteszem egy változóba
    const korszak_value = korszak_HTMLelement.value;//a korszak_HTMLelement értékét beleteszem egy változóba
    let szerelem1_value = szerelem1_HTMLelement.value;//a szerelem1_HTMLelement értékét beleteszem egy változóba
    const szerelem2_value = volteMasikcheck.checked ? szerelem2_HTMLelement.value : undefined;//a szerelem2_HTMLelement értékét beleteszem egy változóba abban az esetben ha a checkboxunk be van pipálva mert más esetben undefineddé tesszük

    const thisForm = e.currentTarget;//az e.currentTarget tartalmazza a formunkat amit eltarolunk egy valtozoban
    const errorElements = thisForm.querySelectorAll('.error');//az összes olyan elemet elkérjük ami error classal rendelkezik
    for (const errorElement of errorElements){//itt végigiterálunk az imént bekért error classos elemeken ami az errorElements
        errorElement.innerHTML = "";//kitöröljük azt az elemet ami benne van
    }
    let valid = true;//itt megadjuk a valid változónak kezdőérték ként hogy true ezt majd a későbbiekben fogjuk változtatni

    if(!egyszeruValidacio(kolto_nevHTMLelement, "Add meg a költő nevét")){//itt hívjuk meg a függvényünket
        valid = false;//a valid változónak false értéket adunk
    }
    if(!egyszeruValidacio(korszak_HTMLelement, "Add meg a korszakot")){//itt hívjuk meg a függvényünket
        valid = false;//a valid változónak false értéket adunk
    }
    if(!osszetettValidacio(szerelem1_HTMLelement, szerelem2_HTMLelement, volteMasikcheck, "add már meg az elso szerelmét!", "hol a második szerelme", "add meg mindkét szerelmet")){//függvényhívás itt adjuk meg neki a sok bemeneti paraméterét
        valid = false;//egy valid változót false-ra állítunk
    }
    

    if(szerelem1_value === ""){//hogyha nem írtak semmit a szerelem1 inputjába akkor:
        szerelem1_value = "-";//egy kötőjelet fogunk megjeleníteni
    }
    
    if(valid){//ha a valid változónk igaz akkor:
        const newElement = {//létrehozunk egy új objektumot
            szerzo: szerzo_value,//a szerzo erteke a szerzo_value lesz
            korszak: korszak_value,//a korszak erteke a korszak_value lesz
            szerelem1: szerelem1_value,//a szerelem1 erteke a szerelem1_value lesz
            szerelem2: szerelem2_value//a szerelem2 erteke a szerelem2_value lesz
        };
    
        array.push(newElement);//itt adjuk hozzá az arrayhez az új adatokat
        tbody.innerHTML = ''; // Az aktuális táblázat tartalmának törlése
        renderTable(); // Újra rendereljük a táblázatot az új elemmel
        thisForm.reset();//itt töröljük az input mezőkbe beírt dolgokat
    }
}
);

function egyszeruValidacio(inputHtmlelement, errormessage){//létrehozunk egy föggvényt két bemeneti paraméter
    let valid = true;//valid valtozo deklarálása
    if(inputHtmlelement.value === ""){//ellenőrizzük hogy a korszak nevének input mezője üres-e
        const parentElement = inputHtmlelement.parentElement;//megkeressük a korszak input mezőjének parentElement tulajdonságát és ezt eltároljuk egy változóba 
        const errorPlace = parentElement.querySelector('.error');//a korszak szuloelemeben keresünk egy olyan elemet ami rendelkezik az error classal
        if(errorPlace !== undefined){//ha van ilyen hely ahova majd tudja rakni a hibaüzenetet és nem undefined akkor:
            errorPlace.innerHTML = errormessage;//megadjuk neki a hiaüzenetet a bemeneti paraméterünkből (stringet) és itt is iratjuk ki
        }
        valid = false;//a valid változónkat false-ra állítjuk ezáltal nem adódik majd a táblázatunkhoz új sor
    }
    return valid;//visszatérünk a valid valtozonkkal
}
function osszetettValidacio(szerelem1Input, szerelem2Input, checkboxChecked, errormessageSz1, errormessageChck, errormessageSz2){//létrehozok egy függvényt ami sok bemeneti paramétert vár
    let valid = true;//valid változónk megadása
    if(checkboxChecked.checked === true && szerelem1Input.value === "" && szerelem2Input.value !== ""){//ha a checkboxunk be van pipálva és a szerelem1 üres de a szerelem2 meg nem akkor:
        const parentElement = szerelem1Input.parentElement;//megkeressük a szerelem1 input mezőjének parentElement tulajdonságát és ezt eltároljuk egy változóba 
        const errorPlace = parentElement.querySelector('.error');//a szerelem1 szuloelemeben keresünk egy olyan elemet ami rendelkezik az error classal
        if(errorPlace !== undefined){//ha van ilyen hely ahova majd tudja rakni a hibaüzenetet és nem undefined akkor:
            errorPlace.innerHTML = errormessageSz1;//megadjuk neki a hiaüzenetet manuálisan (stringet) és itt is iratjuk ki
        }
        valid = false;//a valid változónkat false-ra állítjuk ezáltal nem adódik majd a táblázatunkhoz új sor
    }
    if(checkboxChecked.checked === true && szerelem1Input.value !== "" && szerelem2Input.value === ""){//ha a checkboxunk be van pipálva és a szerelem2 üres de a szerelem1 meg nem akkor:
        const parentElement = szerelem2Input.parentElement;//megkeressük a szerelem2 input mezőjének parentElement tulajdonságát és ezt eltároljuk egy változóba 
        const errorPlace = parentElement.querySelector('.error');//a szerelem2 szuloelemeben keresünk egy olyan elemet ami rendelkezik az error classal
        if(errorPlace !== undefined){//ha van ilyen hely ahova majd tudja rakni a hibaüzenetet és nem undefined akkor:
            errorPlace.innerHTML = errormessageSz2;//megadjuk neki a hiaüzenetet manuálisan (stringet) és itt is iratjuk ki
        }
        valid = false;//a valid változónkat false-ra állítjuk ezáltal nem adódik majd a táblázatunkhoz új sor
    }
    if(checkboxChecked.checked === true && szerelem1Input.value === "" && szerelem2Input.value === ""){//ha a checkboxunk be van pipálva és a szerelem1 üres és a szerelem2 is akkor:
        const parentElement = checkboxChecked.parentElement;//megkeressük a masodik input mezőjének parentElement tulajdonságát és ezt eltároljuk egy változóba 
        const errorPlace = parentElement.querySelector('.error');//a masodik szuloelemeben keresünk egy olyan elemet ami rendelkezik az error classal
        if(errorPlace !== undefined){//ha van ilyen hely ahova majd tudja rakni a hibaüzenetet és nem undefined akkor:
            errorPlace.innerHTML = errormessageChck;//megadjuk neki a hiaüzenetet manuálisan (stringet) és itt is iratjuk ki
        }
        valid = false;//a valid változónkat false-ra állítjuk ezáltal nem adódik majd a táblázatunkhoz új sor
    }
    return valid;//visszatérünk ezzel a változónkkal
}
