let continuer = true;
let historique = [];

while (continuer) {
  const operation = prompt(
    "Choisissez une opération (+, -, *, /) ou entrez 'q' pour quitter :"
  );
  //pour quitter
  if (operation === "q") {
    alert(
      "Merci d'avoir utiliser notre calculatrice.\n Bonne fin de journée n'hésiter pas a revenir"
    );
    break;
  }

  if (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "*" &&
    operation !== "/"
  ) {
    alert("Opération non valide !");
    continue; // laisse a l'utilisateur la possibilité de recommencer si il a fais quelle que chose d'incorrect
  }

  const nombre1 = prompt("Entrez le premier nombre :");
  const nombre2 = prompt("Entrez le deuxième nombre :");
  //si les chiffres ne sont pas bon
  if (isNaN(nombre1) || isNaN(nombre2)) {
    alert("Veuillez entrer des nombres valides !");
    continue; // laisse a l'utilisateur la possibilité de recommencer si il a fais quelle que chose d'incorrect
  }

  const num1 = parseFloat(nombre1);
  const num2 = parseFloat(nombre2);

  let resultat;

  switch (operation) {
    case "+":
      if (num2 === 0 || num1 === 0) {
        alert("on ne propose pas d'opération avez zero");
        continue; // Reprend la boucle pour une nouvelle opération.
      }
      resultat = num1 + num2;
      break;
    case "-":
      if (num2 === 0 || num1 === 0) {
        alert("on ne propose pas d'opération avez zero");
        continue; // Reprend la boucle pour une nouvelle opération.
      }
      resultat = num1 - num2;
      break;
    case "*":
      if (num2 === 0 || num1 === 0) {
        alert("on ne propose pas d'opération avez zero");
        continue; // Reprend la boucle pour une nouvelle opération.
      }
      resultat = num1 * num2;
      break;
    case "/":
      if (num2 === 0 || num1 === 0) {
        alert("on ne propose pas d'opération avez zero");
        continue; // Reprend la boucle pour une nouvelle opération.
      }
      resultat = num1 / num2;
      break;
  }

  alert("Votre résultat est " + resultat);
  historique.push(num1 + " " + operation + " " + num2 + " = " + resultat);

  // Demande à l'utilisateur s'il souhaite continuer
  const continuerSaisie = prompt(
    "Voulez-vous effectuer un autre calcul ? (o/n)"
  );
  if (continuerSaisie.toLowerCase() !== "o") {
    continuer = false;
  }
}

// Affiche l'historique des opérations une fois quon a quiter la possibilité de faire de nouveaux calcul
if (historique.length > 0) {
  alert("Historique des calculs précédents :");
  for (const calcul of historique) {
    alert(calcul);
  }
}
