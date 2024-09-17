let memoire = 0;
let derniereDate = null;

document.addEventListener("DOMContentLoaded", (event) => {
    function handleKeyboardInput(event) {
        const key = event.key;

        if (/\d/.test(key) || ["+", "-", "*", "/"].includes(key)) {
            afficher(key);
        }

        if (key === "Backspace") {
            effacerUnCaractere();
        } else if (key === "Enter") {
            resoudre();
        } else if (key === "(" || key === ")") {
            toggleParentheses();
        }
    }

    document.addEventListener("keydown", handleKeyboardInput);
});

function afficher(valeur) {
    let affichage = document.querySelector(".display");
    if (affichage.innerHTML === "0") {
        affichage.innerHTML = valeur;
    } else {
        affichage.innerHTML += valeur;
    }
}

function effacer() {
    document.querySelector(".display").innerHTML = "0";
}

function effacerUnCaractere() {
    let affichage = document.querySelector(".display");
    affichage.innerHTML = affichage.innerHTML.slice(0, -1) || "0";
}

function resoudre() {
    let affichage = document.querySelector(".display");
    const calcul = affichage.innerHTML;
    try {
        const resultat = eval(calcul);
        affichage.innerHTML = resultat;
        ajouterHistorique(calcul, resultat);
    } catch (e) {
        affichage.innerHTML = "Erreur";
    }
}

function racineCarree() {
    let affichage = document.querySelector(".display");
    affichage.innerHTML = Math.sqrt(eval(affichage.innerHTML));
}

function puissance() {
    let affichage = document.querySelector(".display");
    affichage.innerHTML += "**";
}

function inverser() {
    let affichage = document.querySelector(".display");
    affichage.innerHTML = 1 / eval(affichage.innerHTML);
}

function trigonometrique(fonction) {
    let affichage = document.querySelector(".display");
    let valeur = eval(affichage.innerHTML);
    if (fonction === "sin") {
        affichage.innerHTML = Math.sin(valeur * Math.PI / 180); // Convertir en radians
    } else if (fonction === "cos") {
        affichage.innerHTML = Math.cos(valeur * Math.PI / 180); // Convertir en radians
    } else if (fonction === "tan") {
        affichage.innerHTML = Math.tan(valeur * Math.PI / 180); // Convertir en radians
    }
}

function logarithme(fonction) {
    let affichage = document.querySelector(".display");
    let valeur = eval(affichage.innerHTML);
    if (fonction === "log") {
        affichage.innerHTML = Math.log10(valeur);
    } else if (fonction === "ln") {
        affichage.innerHTML = Math.log(valeur);
    }
}

function toggleParentheses() {
    const display = document.querySelector(".display");
    const text = display.textContent;
    const lastChar = text[text.length - 1];

    if (text === "0") {
        display.textContent = "";
    }

    const openParentheses = (text.match(/\(/g) || []).length;
    const closeParentheses = (text.match(/\)/g) || []).length;

    if (lastChar === ")" || openParentheses > closeParentheses) {
        display.textContent += ")";
    } else {
        display.textContent += "(";
    }
}

function factorielle() {
    let affichage = document.querySelector(".display");
    let n = eval(affichage.innerHTML);
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    affichage.innerHTML = result;
}

function memoireAjouter() {
    let affichage = document.querySelector(".display");
    memoire += eval(affichage.innerHTML);
}

function memoireSoustraire() {
    let affichage = document.querySelector(".display");
    memoire -= eval(affichage.innerHTML);
}

function memoireRappeler() {
    document.querySelector(".display").innerHTML = memoire;
}

function memoireEffacer() {
    memoire = 0;
}

function ouvrirModal() {
    document.getElementById("modalCaracteres").style.display = "block";
}

function fermerModal() {
    document.getElementById("modalCaracteres").style.display = "none";
}

function ajouterHistorique(calcul, resultat) {
    const historiqueList = document.getElementById("historiqueList");
    const li = document.createElement("li");

    const optionsHeure = { hour: "2-digit", minute: "2-digit" };
    const heure = new Date().toLocaleTimeString([], optionsHeure);

    const optionsDate = { year: "numeric", month: "long", day: "numeric" };
    const dateActuelle = new Date().toLocaleDateString([], optionsDate);

    if (derniereDate !== dateActuelle) {
        derniereDate = dateActuelle;
        const dateDiv = document.createElement("div");
        dateDiv.className = "date";
        dateDiv.textContent = dateActuelle;
        historiqueList.appendChild(dateDiv);
    }

    li.innerHTML = `<div class="heure">${heure}</div>
                    <div class="calcul">${calcul} = <span class="resultat">${resultat}</span></div>`;
    historiqueList.appendChild(li);
}
