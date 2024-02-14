const resultat = document.querySelector(".affichage");
function resoudre() {
    let egal = eval(resultat.innerHTML);
    resultat.innerHTML = egal;
}
//permet de faire un pourcentage
function pourcentage() {
    resultat.innerHTML = resultat.innerHTML / 100;
}
//permet de tt effacer
function effacer() {
    resultat.innerHTML = "0";
}
//enleve le zero des le depart
function virezlezero() {
    resultat.innerHTML == 0 ? (resultat.innerHTML = " ") : resultat.innerHTML;
}
//permet de se servir des touches de la calculatrice
function afficher(touche) {
    virezlezero();
    resultat.innerHTML += touche;
}

//======================================================
// POUR AVOIR L'HISTORIQUE DES CALCULS
//======================================================

const historique = document.getElementById("historique");

function resoudre() {
    let calcul = resultat.innerHTML;
    let egal = eval(calcul);
    resultat.innerHTML = egal;
    ajouterHistorique(calcul, egal);
}

function ajouterHistorique(calcul, resultat) {
    const maintenant = new Date();
    //------------------------------------
    //pour mettre l'heure entre chaque calcul
    //------------------------------------
    const options = {
        timeZone: "Europe/Paris",
        hour: "numeric",
        minute: "numeric",
        seconde: "numeric",
    };
    const heureFrance = maintenant.toLocaleTimeString("fr-FR", options);
    if (historique.innerHTML === "") {
        historique.innerHTML = "<div><h4>Pas encore de calcul fait</h4></div>";
    }
    historique.innerHTML += `<div><h4>à ${heureFrance}<h4><p><b>${calcul}</b> = ${resultat} </p></div>`;
}
// function afficherHeure() {
//     const maintenant = new Date();
//     const heure = maintenant.getHours();
//     const minutes = maintenant.getMinutes();
//     const seconde = maintenant.getSeconds();

//     const heureStr = (heure < 10 ? '0' + heure : heure) + 'h' + (minutes < 10 ? '0' + minutes : minutes);

//     document.getElementById('heure').textContent = heureStr;
// }

//======================================================
// POUR switch entre les bouton ou le pads numerique
//======================================================

// const modeBtn = document.getElementById('mode');
// let modeClavier = true;

// modeBtn.addEventListener('click', () => {
//     modeClavier = !modeClavier;
//     if (modeClavier) {
//         modeBtn.textContent = 'Utiliser le clavier';
//     } else {
//         modeBtn.textContent = 'Utiliser le pavé numérique';
//     }
// });
