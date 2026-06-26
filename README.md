# 🧮 Calculatrice

Une calculatrice web installable (PWA), avec historique des calculs, clavier physique pris en charge, et fonctions scientifiques en option (panneau de caractères spéciaux).

## ✨ Fonctionnalités

- Opérations de base (+, −, ×, ÷, %, parenthèses, décimales).
- Historique des calculs, regroupé par date, avec heure de chaque calcul.
- Support du clavier physique : chiffres, opérateurs, `Entrée` (=), `Retour arrière`, parenthèses.
- Panneau de fonctions scientifiques (racine carrée, puissance, sin/cos/tan, log/ln, factorielle, mémoire M+/M-/MR/MC) — fonctions JS prêtes, l'ouverture du panneau est actuellement désactivée dans le HTML (voir [Points d'attention](#-points-dattention)).
- Installable comme application (PWA) : icône sur l'écran d'accueil, fonctionnement hors-ligne basique via Service Worker.
- Favicon adaptative (icône différente sur mobile et sur PC).
- **Mise en page responsive** : sur grand écran, la calculatrice et l'historique sont affichés côte à côte ; sur mobile et petite tablette, ils restent empilés l'un en dessous de l'autre (bascule à 900px de largeur d'écran).

## 📁 Structure du projet

```
.
├── index.html
├── manifest.json
├── sw.js                  (Service Worker, pour le mode hors-ligne)
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── script.js              (logique de la calculatrice)
    │   ├── bouton_installer.js    (installation PWA + favicon adaptative)
    │   ├── bootstrap.min.js       
    │   └── jquery-3.6.1.min.js    
    └── image/
        ├── favicon.png            
        ├── calculator.png         
        ├── retour_blanc.png       
      
```

> Les images listées ci-dessus ne font pas partie des fichiers fournis à l'origine de ce README ; assurez-vous qu'elles sont bien présentes dans `assets/image/` avec exactement ces noms avant de déployer.

## 🚀 Utilisation

Aucune installation nécessaire pour une utilisation simple : ouvrez `index.html` dans un navigateur.

Pour profiter du mode PWA (installation, hors-ligne) et du Service Worker, le site doit être servi via **http(s)** (et non ouvert en `file://`) — par exemple avec GitHub Pages, Netlify, ou un serveur local (`python3 -m http.server`).

## 🔧 Métadonnées

Le `<head>` du fichier `index.html` contient :
- **SEO** : `description`, `keywords`, `author`, `robots`.
- **Open Graph** (aperçu sur Facebook, LinkedIn, Discord, WhatsApp...) : `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:locale`, `og:site_name`.
- **Twitter Card** (aperçu sur Twitter/X) : `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
- **`theme-color`** : couleur de la barre d'adresse sur Chrome/Android, alignée sur celle du `manifest.json` (`#007bff`).
- **Favicon adaptative** : une icône pour PC (`favicon.png`) et une pour mobile (`calculator.png`, appliquée sous 768px de largeur), gérée à la fois par une media query CSS sur la balise `<link>` et par `bouton_installer.js` au redimensionnement.

Toutes les URLs Open Graph / Twitter pointent vers `https://leven-anju-yuki.github.io/CalculatriceFront/`. Si l'adresse de déploiement change, mettez à jour `og:url`, `og:image` et `twitter:image` dans `index.html`.

## 📱 Mise en page responsive : calculatrice + historique

- **PC / grand écran (≥ 900px de large)** : la calculatrice et l'historique sont affichés **côte à côte**, dans un conteneur centré de 750px maximum. L'historique devient défilant verticalement (`overflow-y: auto`) au-delà de 480px de hauteur, pour ne pas pousser le bas de page indéfiniment.
- **Mobile / tablette (< 900px)** : les deux blocs restent **empilés**, l'un en dessous de l'autre, comme dans la version d'origine.

Ce comportement est géré uniquement en CSS, via le conteneur `.contenu-principal` et une media query `@media screen and (min-width: 900px)` dans `assets/css/style.css`. Aucune logique JavaScript n'a été nécessaire.

> Le seuil de 900px a été choisi parce que la calculatrice (350px) et l'historique (320px), une fois côte à côte avec leur espacement, ont besoin d'environ 750-800px pour ne pas se sentir à l'étroit. C'est volontairement différent du seuil de 768px utilisé pour la favicon mobile, qui répond à un besoin différent.

## 🛠️ Technologies

- HTML5, CSS3 (Flexbox, media queries)
- JavaScript (vanilla, ES6+)
- Web App Manifest + Service Worker (PWA)

## 📄 Auteur
Florie Decitre 🐰
