switch(sezione){
    case "modulistica":
        // create title div
        let titleDiv = document.createElement("div");
        titleDiv.style.height = "150px";
        titleDiv.style.width = "100%";
        titleDiv.style.display = "flex";
        titleDiv.style.alignItems = "center";
        document.querySelector(".main").appendChild(titleDiv);
        let titleA = document.createElement("a");
        titleA.innerHTML = "Modulistica";
        titleA.style.fontFamily = "'Roboto', sans-serif";
        titleA.style.color = "black";
        titleA.style.fontSize = "220%";
        titleA.style.marginLeft = "5.5%";
        titleDiv.appendChild(titleA);
        let moduDiv = document.createElement("div");
        moduDiv.style.height = "auto";
        moduDiv.style.width = "100%";
        document.querySelector(".main").appendChild(moduDiv);
        let descrizioneA = document.createElement("h6");
        descrizioneA.innerHTML = "In questa pagina trovi tutta la modulistica necessaria per partecipare alle nostre attività.Seleziona e scarica quella di tuo interesse. Ricordati di compilare tutti i dati richiesti in modo leggibile.";
        descrizioneA.style.width = "61%";
        descrizioneA.style.fontFamily = "'Roboto', sans-serif";
        descrizioneA.style.color = "black";
        descrizioneA.style.fontSize = "120%";
        descrizioneA.style.fontWeight = "400";
        descrizioneA.style.marginLeft = "5.5%";
        moduDiv.appendChild(descrizioneA);
        let downloadDiv = document.createElement("div");
        downloadDiv.style.height = "auto";
        downloadDiv.style.width = "100%";
        downloadDiv.style.display = "flex";
        downloadDiv.style.flexDirection = "column";
        moduDiv.appendChild(downloadDiv);

        // in futuro rendere automatico e scalabile
        let downloadColumn1Div = document.createElement("div");
        downloadColumn1Div.style.height = "auto";
        downloadColumn1Div.style.width = "100%";
        downloadColumn1Div.style.display = "flex";
        downloadColumn1Div.style.flexDirection = "row";
        downloadColumn1Div.style.paddingTop = "90px";
        downloadColumn1Div.style.paddingBottom = "50px";
        downloadDiv.appendChild(downloadColumn1Div);
        // scheda iscrizione agonisti
        let download1IscAgonisti = document.createElement("div");
        download1IscAgonisti.style.height = "auto";
        download1IscAgonisti.style.width = "26%"
        download1IscAgonisti.style.display = "flex";
        download1IscAgonisti.style.flexDirection = "column";
        download1IscAgonisti.style.marginLeft = "5.5%";
        download1IscAgonisti.style.marginRight = "5.5%";
        downloadColumn1Div.appendChild(download1IscAgonisti);
        let download1IscAgonistiTitle = document.createElement("h6");
        download1IscAgonistiTitle.innerHTML = "Modulo di iscrizione agonisti";
        download1IscAgonistiTitle.style.width = "100%";
        download1IscAgonistiTitle.style.fontFamily = "'Roboto', sans-serif";
        download1IscAgonistiTitle.style.color = "black";
        download1IscAgonistiTitle.style.fontSize = "120%";
        download1IscAgonistiTitle.style.fontWeight = "600";
        download1IscAgonisti.appendChild(download1IscAgonistiTitle);
        let download1IscAgonistiDescrizione = document.createElement("h6");
        download1IscAgonistiDescrizione.innerHTML = "Modulo per l'iscrizione all'attività agonistica in una delle tre categorie previste: baby-cuccioli, ragazzi-allievi o giovani";
        download1IscAgonistiDescrizione.style.width = "100%";
        download1IscAgonistiDescrizione.style.fontFamily = "'Roboto', sans-serif";
        download1IscAgonistiDescrizione.style.color = "black";
        download1IscAgonistiDescrizione.style.fontSize = "100%";
        download1IscAgonistiDescrizione.style.fontWeight = "400";
        download1IscAgonistiDescrizione.style.paddingTop = "16px";
        download1IscAgonisti.appendChild(download1IscAgonistiDescrizione);
        let download1IscAgonistiBottone = document.createElement("button");
        download1IscAgonistiBottone.innerHTML = "Download";
        download1IscAgonistiBottone.style.height = "auto";
        download1IscAgonistiBottone.style.background = "black";
        download1IscAgonistiBottone.style.padding = "8px";
        download1IscAgonistiBottone.style.width = "110px";
        download1IscAgonistiBottone.style.border = "solid 4px black";
        download1IscAgonistiBottone.style.marginTop = "17px";
        download1IscAgonistiBottone.style.textAlign = "center";
        download1IscAgonistiBottone.style.color = "white";
        download1IscAgonistiBottone.style.fontSize = "96%";
        download1IscAgonistiBottone.style.fontWeight = "400";
        download1IscAgonisti.appendChild(download1IscAgonistiBottone);
        // scheda iscrizione corsi sci
        let download1CorsSci = document.createElement("div");
        download1CorsSci.style.height = "auto";
        download1CorsSci.style.width = "26%"
        download1CorsSci.style.display = "flex";
        download1CorsSci.style.flexDirection = "column";
        downloadColumn1Div.appendChild(download1CorsSci);
        let download1CorsSciTitle = document.createElement("h6");
        download1CorsSciTitle.innerHTML = "Modulo di iscrizione corsi sci";
        download1CorsSciTitle.style.width = "100%";
        download1CorsSciTitle.style.fontFamily = "'Roboto', sans-serif";
        download1CorsSciTitle.style.color = "black";
        download1CorsSciTitle.style.fontSize = "120%";
        download1CorsSciTitle.style.fontWeight = "600";
        download1CorsSci.appendChild(download1CorsSciTitle);
        let download1CorsSciDescrizione = document.createElement("h6");
        download1CorsSciDescrizione.innerHTML = "Modulo di iscrizione all'attività non agonistica, partecipando a uno dei corsi organizzati dallo sci club: corso base o corso sprint";
        download1CorsSciDescrizione.style.width = "100%";
        download1CorsSciDescrizione.style.fontFamily = "'Roboto', sans-serif";
        download1CorsSciDescrizione.style.color = "black";
        download1CorsSciDescrizione.style.fontSize = "100%";
        download1CorsSciDescrizione.style.fontWeight = "400";
        download1CorsSciDescrizione.style.paddingTop = "16px";
        download1CorsSci.appendChild(download1CorsSciDescrizione);
        let download1CorsSciBottone = document.createElement("button");
        download1CorsSciBottone.innerHTML = "Download";
        download1CorsSciBottone.style.height = "auto";
        download1CorsSciBottone.style.background = "black";
        download1CorsSciBottone.style.padding = "8px";
        download1CorsSciBottone.style.width = "110px";
        download1CorsSciBottone.style.border = "solid 4px black";
        download1CorsSciBottone.style.marginTop = "17px";
        download1CorsSciBottone.style.textAlign = "center";
        download1CorsSciBottone.style.color = "white";
        download1CorsSciBottone.style.fontSize = "96%";
        download1CorsSciBottone.style.fontWeight = "400";
        download1CorsSci.appendChild(download1CorsSciBottone);
        // scheda iscrizione corsi sci
        let download1PrivMinori = document.createElement("div");
        download1PrivMinori.style.height = "auto";
        download1PrivMinori.style.width = "26%"
        download1PrivMinori.style.display = "flex";
        download1PrivMinori.style.flexDirection = "column";
        download1PrivMinori.style.marginLeft = "5.5%";
        download1PrivMinori.style.marginRight = "5.5%";
        downloadColumn1Div.appendChild(download1PrivMinori);
        let download1PrivMinoriTitle = document.createElement("h6");
        download1PrivMinoriTitle.innerHTML = "Modulo privacy minori";
        download1PrivMinoriTitle.style.width = "100%";
        download1PrivMinoriTitle.style.fontFamily = "'Roboto', sans-serif";
        download1PrivMinoriTitle.style.color = "black";
        download1PrivMinoriTitle.style.fontSize = "120%";
        download1PrivMinoriTitle.style.fontWeight = "600";
        download1PrivMinori.appendChild(download1PrivMinoriTitle);
        let download1PrivMinoriDescrizione = document.createElement("h6");
        download1PrivMinoriDescrizione.innerHTML = "Modulo informativo e consenso al trattamento dei dati personali per i soci minorenni, da firmare a cura del genitore o del tutore";
        download1PrivMinoriDescrizione.style.width = "100%";
        download1PrivMinoriDescrizione.style.fontFamily = "'Roboto', sans-serif";
        download1PrivMinoriDescrizione.style.color = "black";
        download1PrivMinoriDescrizione.style.fontSize = "100%";
        download1PrivMinoriDescrizione.style.fontWeight = "400";
        download1PrivMinoriDescrizione.style.paddingTop = "16px";
        download1PrivMinori.appendChild(download1PrivMinoriDescrizione);
        let download1PrivMinoriBottone = document.createElement("button");
        download1PrivMinoriBottone.innerHTML = "Download";
        download1PrivMinoriBottone.style.height = "auto";
        download1PrivMinoriBottone.style.background = "black";
        download1PrivMinoriBottone.style.padding = "8px";
        download1PrivMinoriBottone.style.width = "110px";
        download1PrivMinoriBottone.style.border = "solid 4px black";
        download1PrivMinoriBottone.style.marginTop = "17px";
        download1PrivMinoriBottone.style.textAlign = "center";
        download1PrivMinoriBottone.style.color = "white";
        download1PrivMinoriBottone.style.fontSize = "96%";
        download1PrivMinoriBottone.style.fontWeight = "400";
        download1PrivMinori.appendChild(download1PrivMinoriBottone);
        // row2
        let downloadColumn2Div = document.createElement("div");
        downloadColumn2Div.style.height = "auto";
        downloadColumn2Div.style.width = "100%";
        downloadColumn2Div.style.display = "flex";
        downloadColumn2Div.style.flexDirection = "row";
        downloadColumn2Div.style.paddingTop = "10px";
        downloadColumn2Div.style.paddingBottom = "50px";
        downloadDiv.appendChild(downloadColumn2Div);
        // scheda iscrizione agonisti
        let download2PrivAdulti = document.createElement("div");
        download2PrivAdulti.style.height = "auto";
        download2PrivAdulti.style.width = "26%"
        download2PrivAdulti.style.display = "flex";
        download2PrivAdulti.style.flexDirection = "column";
        download2PrivAdulti.style.marginLeft = "5.5%";
        download2PrivAdulti.style.marginRight = "5.5%";
        downloadColumn2Div.appendChild(download2PrivAdulti);
        let download2PrivAdultiTitle = document.createElement("h6");
        download2PrivAdultiTitle.innerHTML = "Modulo pricavy adulti";
        download2PrivAdultiTitle.style.width = "100%";
        download2PrivAdultiTitle.style.fontFamily = "'Roboto', sans-serif";
        download2PrivAdultiTitle.style.color = "black";
        download2PrivAdultiTitle.style.fontSize = "120%";
        download2PrivAdultiTitle.style.fontWeight = "600";
        download2PrivAdulti.appendChild(download2PrivAdultiTitle);
        let download2PrivAdultiDescrizione = document.createElement("h6");
        download2PrivAdultiDescrizione.innerHTML = "Modulo informativo e consenso al trattamento dei dati personali per i soci maggiorenni.";
        download2PrivAdultiDescrizione.style.width = "100%";
        download2PrivAdultiDescrizione.style.fontFamily = "'Roboto', sans-serif";
        download2PrivAdultiDescrizione.style.color = "black";
        download2PrivAdultiDescrizione.style.fontSize = "100%";
        download2PrivAdultiDescrizione.style.fontWeight = "400";
        download2PrivAdultiDescrizione.style.paddingTop = "16px";
        download2PrivAdulti.appendChild(download2PrivAdultiDescrizione);
        let download2PrivAdultiBottone = document.createElement("button");
        download2PrivAdultiBottone.innerHTML = "Download";
        download2PrivAdultiBottone.style.height = "auto";
        download2PrivAdultiBottone.style.background = "black";
        download2PrivAdultiBottone.style.padding = "8px";
        download2PrivAdultiBottone.style.width = "110px";
        download2PrivAdultiBottone.style.border = "solid 4px black";
        download2PrivAdultiBottone.style.marginTop = "17px";
        download2PrivAdultiBottone.style.textAlign = "center";
        download2PrivAdultiBottone.style.color = "white";
        download2PrivAdultiBottone.style.fontSize = "96%";
        download2PrivAdultiBottone.style.fontWeight = "400";
        download2PrivAdulti.appendChild(download2PrivAdultiBottone);
        // scheda iscrizione corsi sci
        let download1PrivWeb = document.createElement("div");
        download1PrivWeb.style.height = "auto";
        download1PrivWeb.style.width = "26%"
        download1PrivWeb.style.display = "flex";
        download1PrivWeb.style.flexDirection = "column";
        downloadColumn2Div.appendChild(download1PrivWeb);
        let download1PrivWebTitle = document.createElement("h6");
        download1PrivWebTitle.innerHTML = "Modulo privacy web";
        download1PrivWebTitle.style.width = "100%";
        download1PrivWebTitle.style.fontFamily = "'Roboto', sans-serif";
        download1PrivWebTitle.style.color = "black";
        download1PrivWebTitle.style.fontSize = "120%";
        download1PrivWebTitle.style.fontWeight = "600";
        download1PrivWeb.appendChild(download1PrivWebTitle);
        let download1PrivWebDescrizione = document.createElement("h6");
        download1PrivWebDescrizione.innerHTML = "Modulo informativo e consenso al trattamento dei dati personali per gli utenti del sito istituzionale dello sci club.";
        download1PrivWebDescrizione.style.width = "100%";
        download1PrivWebDescrizione.style.fontFamily = "'Roboto', sans-serif";
        download1PrivWebDescrizione.style.color = "black";
        download1PrivWebDescrizione.style.fontSize = "100%";
        download1PrivWebDescrizione.style.fontWeight = "400";
        download1PrivWebDescrizione.style.paddingTop = "16px";
        download1PrivWeb.appendChild(download1PrivWebDescrizione);
        let download1PrivWebBottone = document.createElement("button");
        download1PrivWebBottone.innerHTML = "Download";
        download1PrivWebBottone.style.height = "auto";
        download1PrivWebBottone.style.background = "black";
        download1PrivWebBottone.style.padding = "8px";
        download1PrivWebBottone.style.width = "110px";
        download1PrivWebBottone.style.border = "solid 4px black";
        download1PrivWebBottone.style.marginTop = "17px";
        download1PrivWebBottone.style.textAlign = "center";
        download1PrivWebBottone.style.color = "white";
        download1PrivWebBottone.style.fontSize = "96%";
        download1PrivWebBottone.style.fontWeight = "400";
        download1PrivWeb.appendChild(download1PrivWebBottone);

        // magiori informazioni
        let piuInformazioni = document.createElement("div");
        piuInformazioni.style.width = "100%";
        piuInformazioni.style.height = "auto";
        piuInformazioni.style.display = "flex";
        piuInformazioni.style.marginTop = "30px";
        piuInformazioni.style.marginBottom = "10px";
        piuInformazioni.style.flexDirection = "column";
        piuInformazioni.style.alignItems = "center";
        moduDiv.appendChild(piuInformazioni);
        let piuInfoA = document.createElement("a");
        piuInfoA.innerHTML = "Per maggiori informazioni e dettagli relativi alle nostre attività e per soddisfare esigenze personali non esitate a contattarci.";
        piuInfoA.style.color = "back";
        piuInfoA.style.fontFamily = "'Roboto', sans-serif";
        piuInfoA.style.fontSize = "100%";
        piuInfoA.style.fontWeight = "400";
        piuInformazioni.appendChild(piuInfoA);
        break
    case "direttivo":
        
        break;
    case "allenatori":

        break;
    case "regolamento":

        break;
    case "corsiPromo":

        break;
    case "agonismo":
        let main = document.querySelector(".main");
        let titolo = document.createElement('a');
        let sezioni = document.createElement('div');
        let baby = document.createElement('div');
        let ragazzi = document.createElement('div');
        let giovani = document.createElement('div');

        main.style.display = "flex";
        //main.style.backgroundColor = "red"; 
        main.style.flexDirection = "column";

        main.appendChild(titolo);
        titolo.innerHTML += "Agonismo"
        titolo.style.height = "auto";
        titolo.style.width = "auto;"
        titolo.style.fontFamily = "'Roboto', sans-serif";
        titolo.style.fontSize = "40px";
        titolo.style.marginTop = "50px";
        titolo.style.marginLeft = "5%";

        main.appendChild(sezioni);
        sezioni.style.width = "100%";
        sezioni.style.height = "auto";
        sezioni.style.display = "flex";
        sezioni.style.flexDirection = "row";
        sezioni.style.marginTop = "" + (180-90) +"px";
        sezioni.style.position = "relative";
        sezioni.style.marginBottom = "50px";

        sezioni.appendChild(baby);
        baby.style.height = "auto";
        baby.style.width = "27%";
        baby.style.backgroundColor = "#E5E4E4";
        baby.style.borderRadius = "30px";
        baby.style.marginLeft = "5%";
        baby.style.marginRight = "5%";
        baby.style.display = "flex";
        baby.style.flexDirection = "column";
        baby.style.padding = "20px";
        baby.style.alignItems = "center";

        let titoloBaby = document.createElement("a")
        baby.appendChild(titoloBaby);
        titoloBaby.innerHTML += "Baby - Cuccioli";
        titoloBaby.style.fontFamily = "'Roboto', sans-serif";
        titoloBaby.style.fontSize = "200%";
        titoloBaby.style.color = "#051C31";
        titoloBaby.style.marginTop = "15px";
        titoloBaby.style.marginBottom = "25px";

        let scritteBaby = document.createElement("a");
        baby.appendChild(scritteBaby);
        scritteBaby.innerHTML += "Le categorie Baby e Cuccioli accompagnano i bambini nei primi quattro anni di esperienza a livello agonistico. Attraverso allenamenti mirati i bambini acquisiscono autonomia dell'attrezzo e sviluppano i movimenti fondamentali nelle discipline base dello sci alpino (slalom gigante e slalom speciale). La partecipazione alle gare stimola il miglioramento personale e permette di trasmettere ai bambini il giusto valore di una competizione sana e leale, pur mantenendo il divertimento come principale obiettivo.";
        scritteBaby.style.lineHeight = "20pt";
        scritteBaby.style.textAlign = "justify";
        scritteBaby.style.fontFamily = "'Roboto', sans-serif";
        scritteBaby.style.fontSize = "17px";
        scritteBaby.style.color = "#051C31";

        let bottoneBaby = document.createElement("div");
        baby.appendChild(bottoneBaby);
        bottoneBaby.innerHTML += "Atleti"
        bottoneBaby.style.width = "74%";
        bottoneBaby.style.height = "60px";
        bottoneBaby.style.backgroundColor = "#000000";
        bottoneBaby.style.marginTop = "25px";
        bottoneBaby.style.marginBottom = "10px";
        bottoneBaby.style.borderRadius = "20px";
        bottoneBaby.style.display = "flex";
        bottoneBaby.style.alignItems = "center";
        bottoneBaby.style.justifyContent = "center";
        bottoneBaby.style.fontFamily = "'Roboto', sans-serif";
        bottoneBaby.style.fontSize = "23px";
        bottoneBaby.style.color = "#ffffff";


        sezioni.appendChild(ragazzi);
        ragazzi.style.height = "auto";
        ragazzi.style.width = "26%";
        ragazzi.style.backgroundColor = "#E5E4E4";
        ragazzi.style.marginleft = "5%";
        ragazzi.style.display = "flex";
        ragazzi.style.flexDirection = "column";
        ragazzi.style.padding = "20px";
        ragazzi.style.borderRadius = "30px";
        ragazzi.style.alignItems = "center";

        let titoloRagazzi = document.createElement("a");
        ragazzi.appendChild(titoloRagazzi);
        titoloRagazzi.innerHTML = "Ragazzi - Allievi";
        titoloRagazzi.style.fontFamily = "'Roboto', sans-serif";
        titoloRagazzi.style.fontSize = "200%";
        titoloRagazzi.style.color = "#051C31";
        titoloRagazzi.style.marginTop = "15px";
        titoloRagazzi.style.marginBottom = "25px";

        let scritteRagazzi = document.createElement("a");
        ragazzi.appendChild(scritteRagazzi);
        scritteRagazzi.innerHTML = "In queste categorie l'insegnamento tecnico assume un ruolo più rilevante, mirato alla crescita completa dell'atleta nelle varie discipline dello sci alpino. L'impegno richiesto si fa più intenso e la \"passione per lo sci\", accompagnata dalla giusta consapevolezza delle proprie capacità, costituiscono uno stimolo indispensabile per fare quel sacrificio in più spesso necessario per \"non mollare\" e proseguire il cammino verso i traguardi più importanti.";
        scritteRagazzi.style.lineHeight = "20pt";
        scritteRagazzi.style.textAlign = "justify";
        scritteRagazzi.style.fontFamily = "'Roboto', sans-serif";
        scritteRagazzi.style.fontSize = "17px";
        scritteRagazzi.style.color = "#051C31";

        let bottoneRagazzi = document.createElement("div");
        ragazzi.appendChild(bottoneRagazzi);
        bottoneRagazzi.innerHTML += "Atleti"
        bottoneRagazzi.style.width = "74%";
        bottoneRagazzi.style.height = "60px";
        bottoneRagazzi.style.backgroundColor = "#000000";
        bottoneRagazzi.style.marginTop = "25px";
        bottoneRagazzi.style.marginBottom = "10px";
        bottoneRagazzi.style.borderRadius = "20px";
        bottoneRagazzi.style.display = "flex";
        bottoneRagazzi.style.alignItems = "center";
        bottoneRagazzi.style.justifyContent = "center";
        bottoneRagazzi.style.fontFamily = "'Roboto', sans-serif";
        bottoneRagazzi.style.fontSize = "23px";
        bottoneRagazzi.style.color = "#ffffff";


        sezioni.appendChild(giovani);
        giovani.style.height = "auto";
        giovani.style.width = "27%";
        giovani.style.backgroundColor = "#E5E4E4";
        giovani.style.marginLeft = "5%";
        giovani.style.marginRight = "5%";
        giovani.style.display = "flex";
        giovani.style.flexDirection = "column";
        giovani.style.padding = "20px";
        giovani.style.borderRadius = "30px";
        giovani.style.alignItems = "center";

        let titoloGiovani = document.createElement("a");
        giovani.appendChild(titoloGiovani);
        titoloGiovani.innerHTML = "Giovani";
        titoloGiovani.style.fontFamily = "'Roboto', sans-serif";
        titoloGiovani.style.fontSize = "200%";
        titoloGiovani.style.color = "#051C31";
        titoloGiovani.style.marginTop = "15px";
        titoloGiovani.style.marginBottom = "25px";

        let scritteGiovani = document.createElement("a");
        giovani.appendChild(scritteGiovani);
        scritteGiovani.innerHTML += "Gli Atleti di questa categoria partecipano alle gare del circuito FIS (qui arrivano solo i migliori). Alle capacità tecniche, si uniscono ora eccellenti doti atletiche e soprattutto una adeguata preparazione mentale: serietà e dedizione contraddistinguono questi atleti che, a prescindere dai risultati, vanno comunque ammirati per il loro impegno e la loro passione per uno sport che, anche se un giorno non più a livello agonistico, non smetteranno più di praticare.";
        scritteGiovani.style.lineHeight = "20pt";
        scritteGiovani.style.textAlign = "justify";
        scritteGiovani.style.fontFamily = "'Roboto', sans-serif";
        scritteGiovani.style.fontSize = "17px";
        scritteGiovani.style.color = "#051C31";

        let bottoneGiovani = document.createElement("div");
        giovani.appendChild(bottoneGiovani);
        bottoneGiovani.innerHTML += "Atleti"
        bottoneGiovani.style.width = "74%";
        bottoneGiovani.style.height = "60px";
        bottoneGiovani.style.backgroundColor = "#000000";
        bottoneGiovani.style.marginTop = "25px";
        bottoneGiovani.style.marginBottom = "10px";
        bottoneGiovani.style.borderRadius = "20px";
        bottoneGiovani.style.display = "flex";
        bottoneGiovani.style.alignItems = "center";
        bottoneGiovani.style.justifyContent = "center";
        bottoneGiovani.style.fontFamily = "'Roboto', sans-serif";
        bottoneGiovani.style.fontSize = "23px";
        bottoneGiovani.style.color = "#ffffff";       

        break;
}
