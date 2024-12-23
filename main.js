const koltok_array = [//létrehozok egy array tömböt amibe eltárolom a szerzők dolgait
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

//Itt hozzuk létre a táblázatot
const table = document.createElement('table');//létrehozok egy table elemet, ami majd a tablazatomat fogja tartalmazni
document.body.appendChild(table);//Hozzáadom a bodyhoz
//A colgroup elemek szabályozzák a táblázatunk oszlopainak stílusát

//A táblázat fejlécének létrehozása
const thead = document.createElement('thead');//thead elem letrehozasa itt tortenik ez lesz a fejlec
table.appendChild(thead);//hozzáadom a tablehez

//Itt hozzuk létre a táblázat törzsét
const tbody = document.createElement('tbody');//létrehozok egy tbody elemet
table.appendChild(tbody);//hozzáadjuk a tbody-t a table-hez



renderTable(koltok_array);//a rendeTable függvényt itt hívom meg és megadom neki hogy melyik arrayből dolgozzon
generateFejlec();//itt hívjuk meg a fejlécet generáló függvényt
generateForm();//függvényhívás
colgroupFuggveny(); //Meghivjuk a colgroupFuggveny függvényt hogy végrehajtsa a kódot

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
    if(!osszetettValidacio(szerelem1_HTMLelement, szerelem2_HTMLelement, volteMasikcheck, "add már meg az elso szerelmét!", "add meg mindkét szerelmet","hol a második szerelme")){//függvényhívás itt adjuk meg neki a sok bemeneti paraméterét
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
    
        koltok_array.push(newElement);//itt adjuk hozzá az arrayhez az új adatokat
        tbody.innerHTML = ''; // Az aktuális táblázat tartalmának törlése
        renderTable(koltok_array); // Újra rendereljük a táblázatot az új elemmel
        thisForm.reset();//itt töröljük az input mezőkbe beírt dolgokat
    }
}
);