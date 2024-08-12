let memoire = 0;
document.addEventListener('DOMContentLoaded', (event) => {
  // Fonction pour traiter les entrées du clavier
  function handleKeyboardInput(event) {
      const key = event.key;

      // Vérifie si la touche pressée est un chiffre ou un opérateur valide
      if (/\d/.test(key) || ['+', '-', '*', '/'].includes(key)) {
          afficher(key);
      }

      // Gérer les touches spéciales
      if (key === 'Backspace') {
          effacerUnCaractere();
      } else if (key === 'Enter') {
          resoudre();
      } else if (key === '(' || key === ')') {
          toggleParentheses();
      }
  }

  // Ajoute l'événement de touche au document
  document.addEventListener('keydown', handleKeyboardInput);
});

// Affiche le chiffre ou l'opérateur
function afficher(valeur) {
    let affichage = document.querySelector('.display');
    if (affichage.innerHTML === '0') {
        affichage.innerHTML = valeur;
    } else {
        affichage.innerHTML += valeur;
    }
}

// Efface tout l'affichage
function effacer() {
    document.querySelector('.display').innerHTML = '0';
}

// Efface le dernier caractère
function effacerUnCaractere() {
    let affichage = document.querySelector('.display');
    affichage.innerHTML = affichage.innerHTML.slice(0, -1) || '0';
}

// Calcule et affiche le résultat
function resoudre() {
    let affichage = document.querySelector('.display');
    try {
        affichage.innerHTML = eval(affichage.innerHTML);
    } catch (e) {
        affichage.innerHTML = 'Erreur';
    }
}

// Calcul de la racine carrée
function racineCarree() {
    let affichage = document.querySelector('.display');
    affichage.innerHTML = Math.sqrt(eval(affichage.innerHTML));
}

// Calcul de la puissance
function puissance() {
    let affichage = document.querySelector('.display');
    affichage.innerHTML += '**';
}

// Calcul de l'inverse
function inverser() {
    let affichage = document.querySelector('.display');
    affichage.innerHTML = 1 / eval(affichage.innerHTML);
}

// Calcul des fonctions trigonométriques
function trigonometrique(fonction) {
    let affichage = document.querySelector('.display');
    let valeur = eval(affichage.innerHTML);
    if (fonction === 'sin') {
        affichage.innerHTML = Math.sin(valeur);
    } else if (fonction === 'cos') {
        affichage.innerHTML = Math.cos(valeur);
    } else if (fonction === 'tan') {
        affichage.innerHTML = Math.tan(valeur);
    }
}

// Calcul des logarithmes
function logarithme(fonction) {
    let affichage = document.querySelector('.display');
    let valeur = eval(affichage.innerHTML);
    if (fonction === 'log') {
        affichage.innerHTML = Math.log10(valeur);
    } else if (fonction === 'ln') {
        affichage.innerHTML = Math.log(valeur);
    }
}
function toggleParentheses() {
  const display = document.querySelector(".display");
  const text = display.textContent;
  const lastChar = text[text.length - 1];
  
  // Compte le nombre de parenthèses ouvrantes et fermantes
  const openParentheses = (text.match(/\(/g) || []).length;
  const closeParentheses = (text.match(/\)/g) || []).length;
  
  // Si le dernier caractère est une parenthèse fermante ou l'expression est équilibrée
  if (lastChar === ')' || openParentheses > closeParentheses) {
      // Ajouter une parenthèse fermante si nécessaire
      display.textContent += ')';
  } else {
      // Sinon, ajouter une parenthèse ouvrante
      display.textContent += '(';
  }
}
// Calcul de la factorielle
function factorielle() {
    let affichage = document.querySelector('.display');
    let n = eval(affichage.innerHTML);
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    affichage.innerHTML = result;
}

// Gestion de la mémoire
function memoireAjouter() {
    let affichage = document.querySelector('.display');
    memoire += eval(affichage.innerHTML);
}

function memoireSoustraire() {
    let affichage = document.querySelector('.display');
    memoire -= eval(affichage.innerHTML);
}

function memoireRappeler() {
    document.querySelector('.display').innerHTML = memoire;
}

function memoireEffacer() {
    memoire = 0;
}
// Ouvrir la modal
function ouvrirModal() {
  document.getElementById("modalCaracteres").style.display = "block";
}

// Fermer la modal
function fermerModal() {
  document.getElementById("modalCaracteres").style.display = "none";
}

// Variable pour stocker la dernière date affichée
let derniereDate = null;

// Fonction pour ajouter un calcul à l'historique avec l'heure
function ajouterHistorique(calcul, resultat) {
    const historiqueList = document.getElementById("historiqueList");
    const li = document.createElement("li");

    // Format de l'heure sans les secondes
    const optionsHeure = { hour: '2-digit', minute: '2-digit' };
    const heure = new Date().toLocaleTimeString([], optionsHeure);

    // Format de la date (format de date complet ou personnalisé)
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateActuelle = new Date().toLocaleDateString([], optionsDate);

    // Vérifie si la date a changé
    if (derniereDate !== dateActuelle) {
        // Met à jour la dernière date affichée
        derniereDate = dateActuelle;
        // Ajoute la date dans l'historique
        const dateDiv = document.createElement("div");
        dateDiv.className = "date";
        dateDiv.textContent = dateActuelle;
        historiqueList.appendChild(dateDiv);
    }

    // Ajoute l'heure et le calcul
    li.innerHTML = `<div class="heure">${heure}</div>
                    <div class="calcul">${calcul} = <span class="resultat">${resultat}</span></div>`;
    historiqueList.appendChild(li);
}

// Exemple d'utilisation après la résolution d'un calcul
// Fonction pour résoudre le calcul
function resoudre() {
  const display = document.querySelector(".display");
  const calcul = display.textContent;
  try {
      // Utilisez une méthode sécurisée pour évaluer les calculs
      const resultat = eval(calcul); 
      display.textContent = resultat;
      ajouterHistorique(calcul, resultat);
  } catch (e) {
      display.textContent = "Erreur";
  }
}


