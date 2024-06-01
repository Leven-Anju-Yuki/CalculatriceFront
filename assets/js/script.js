const resultat = document.querySelector(".affichage");

function resoudre() {
  let calcul = resultat.innerHTML;
  let egal = eval(calcul);
  resultat.innerHTML = egal;
  ajouterHistorique(calcul, egal);
}

// Permet de faire un pourcentage
function pourcentage() {
  resultat.innerHTML = resultat.innerHTML / 100;
}

// Permet de tout effacer
function effacer() {
  resultat.innerHTML = "0";
}

// Enlève le zéro dès le départ
function virezlezero() {
  resultat.innerHTML == 0 ? (resultat.innerHTML = " ") : resultat.innerHTML;
}

// Permet de se servir des touches de la calculatrice
function afficher(touche) {
  virezlezero();
  resultat.innerHTML += touche;
}

// Pour avoir l'historique des calculs
const historique = [];

function ajouterHistorique(calcul, resultat) {
  const maintenant = new Date();
  // Pour mettre l'heure entre chaque calcul
  const options = {
    timeZone: "Europe/Paris",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const heureFrance = maintenant.toLocaleTimeString("fr-FR", options);
  historique.push({
    heure: heureFrance,
    calcul: calcul,
    resultat: resultat,
  });
  afficherHistorique();
}

function afficherHistorique() {
  const historiqueContenu = document.getElementById("historiqueContenu");
  historiqueContenu.innerHTML = "";
  historique.forEach((item) => {
    historiqueContenu.innerHTML += `<div><h4>à ${item.heure}</h4><p style="text-align:right;font-size:1.6em"><b>${item.calcul}</b> = ${item.resultat}</p></div>`;
  });
}

function supprimer() {
  let affiche = resultat.innerHTML;
  affiche = affiche.slice(0, -1);
  if (affiche === "") {
    affiche = "0";
  }
  resultat.innerHTML = affiche;
}
