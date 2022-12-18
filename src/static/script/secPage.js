switch(sezione){
    case "modulistica":
        
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
        main.style.backgroundColor = "red"; 
        main.style.flexDirection = "column";

        main.appendChild(titolo);
        titolo.innerHTML += "Agonismo"
        titolo.style.height = "auto";
        titolo.style.width = "auto;"
        titolo.style.fontFamily = "'Roboto', sans-serif";
        titolo.style.fontSize = "300%";
        titolo.style.color = "#051C31";
        titolo.style.marginTop = "30px";

        main.appendChild(sezioni);
        sezioni.style.width = "100%";
        sezioni.style.height = "auto";
        sezioni.style.display = "flex";
        sezioni.style.backgroundColor = "violet"; 
        sezioni.style.flexDirection = "row";
        sezioni.style.marginTop = "160px";
        sezioni.style.position = "absolute";

        sezioni.appendChild(baby);
        baby.style.height = "auto";
        baby.style.width = "27%";
        baby.style.backgroundColor = "blue";
        baby.style.marginLeft = "5%";
        baby.style.marginRight = "5%";

        let titoloBaby = document.createElement("a")
        baby.appendChild(titoloBaby);
        titoloBaby.innerHTML += "Baby - Cuccioli";
        titoloBaby.style.fontFamily = "'Roboto', sans-serif";
        titoloBaby.style.fontSize = "200%";
        titoloBaby.style.color = "#051C31";

        let scritteBaby = document.createElement("a");
        baby.appendChild(scritteBaby);
        scritteBaby.innerHTML += "Le categorie Baby e Cuccioli accompagnano i bambini nei primi quattro anni di esperienza a livello agonistico. Attraverso allenamenti mirati i bambini acquisiscono autonomia dell'attrezzo e sviluppano i movimenti fondamentali nelle discipline base dello sci alpino (slalom gigante e slalom speciale). La partecipazione alle gare stimola il miglioramento personale e permette di trasmettere ai bambini il giusto valore di una competizione sana e leale, pur mantenendo il divertimento come principale obiettivo."


        sezioni.appendChild(ragazzi);
        ragazzi.style.height = "100px";
        ragazzi.style.width = "26%";
        ragazzi.style.backgroundColor = "green";
        ragazzi.style.marginleft = "5%";


        sezioni.appendChild(giovani);
        giovani.style.height = "100px";
        giovani.style.width = "27%";
        giovani.style.backgroundColor = "yellow";
        giovani.style.marginLeft = "5%";
        

        break;
}
