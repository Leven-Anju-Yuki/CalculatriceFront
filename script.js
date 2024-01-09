const resultat=document.querySelector('.affichage');
function resoudre() {
    let egal=eval(resultat.innerHTML);
    resultat.innerHTML=egal;
}
//permet de faire un pourcentage
function pourcentage() {
    resultat.innerHTML=resultat.innerHTML/100;
}
//permet de tt effacer
function effacer() {
    resultat.innerHTML='0';
}
//enleve le zero des le depart
function virezlezero() {
    (resultat.innerHTML==0)? resultat.innerHTML=" ":resultat.innerHTML;
}
//permet de se servir des touches de la calculatrice
function afficher(touche) {
    virezlezero();
    resultat.innerHTML+=touche;
}
