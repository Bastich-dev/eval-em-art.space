# Objectifs

● Vous devez intégrer les pages tour et pricing du site.

● Vous devez faire en sorte que le site soit responsive. Page Tour Cette page présente les différents aspects du service Art.space. Elle comporte deux sliders d’image (start et blog) Page Pricing Cette page présente les différentes formules d'abonnement. Au passage sur les offres, un tooltip affiche des informations complémentaires.

# Critères de notation :

### INTEGRATION HTML/CSS

-   Qualité de l'intégration HTML5 (aux normes W3C)
-   Qualité d'écriture des styles CSS
-   Modularité des styles CSS
-   Commentaires des styles CSS
-   Stabilité de la mise en page (structure, dimensions)
-   Respect des règles d'accessibilité
-   Mise en page adaptée aux mobiles pour la dernière rêgle responsive
-   Bonne gestion des triggers responsive
-   Optimisation des médias images/vidéos

### JAVASCRIPT

-   Bonne gestion des bibliothèques/plugins utilisés
-   Qualité et organisation des instructions JS
-   Mise en forme et commentaires du code

### RENDU

-   Qualité des finitions (couleurs, polices, ombres, effets)
-   Ressemblance avec la maquette d'origine
-   Adéquation avec le travail attendu

# Rapport

##### Lien github : https://github.com/BastosC/Eval-EM-mars-2021-Art.Space

##### Lien Netlify de visualisation : https://eval-em-mars-2021.netlify.app/tour.html

# Environnement et production

### VSCode

### HTML / CSS / JAVASCRIPT

### GITHUB

### Déploiement Static Html sur Netlify

J'ai choisi de déployer le site sur Netlify qui me permet d'avoir une url de visualisation simple à partager, de plus, le serveur est directement lié au repo github qui se met automatiquement à jour au push sur master. Et puis ça fait plus pro. Et puis ça fait pro.

# HTML :

-   Meta tags
-   Liens CDN's

##Utilisation des balises de sémantique :

-   head
-   body
-   header
-   nav
-   main
-   footer
-   section
-   article
-   p
-   h1, h2, h3

##Semantique par sections avec titres et contenus : ######exemple réccurent dans le code :

<section>
	<h2></h2>
	<p></p>
</section>

##Animations :

-   Lègères animations : Pure css

##Responsive :

-   Navbar non-burger ( peu de liens, pas dérangeant )
-   Certaines min-width fixes en desktop
-   Images responsives

# CSS

Les fichiers css sont tous situés dans le dossier ./css et sont catégorisés comme ceci :

-   common.css : il permet de mettre en forme tout les styles des parties de HTML communes à toutes les pages du site
-   constants.css : je stocke des constantes css qui me permet de modifier rapidement le theme global du site
-   1 fichier css par page : avec les deux précedants fichiers, écrire tout le reste du css dans un fichier ne le surcharge pas trop, ça va .

J'ai évité au plus possible le in-style css directement dans le HTML et ai préféré plutot initialisé des classes CSS globales larges (ex: .content .black_line )

# Javascript

-   Carousel : Utilisation de la librairie Splide.js
-   Tooltip : vanilla JS &
-   Scroll : Vanilla JS
-   Animations d'entrée : Utilisation de la librairie WOW.js

###Utilisation de librairies :

####Splide.js https://splidejs.com/ J'ai eu envie d'utiliser Splide.js car je ne l'avait jamais utilisé et un de mes camardes de classe m'a indiqué qu'ils utilisaient cette librairie, j'ai donc appris à la manipuler pour ajouter une petite librairie à mes connaissances .

####WOW.js https://wowjs.uk/ J'en avait déjà entendu parlé, j'avai envie de tester

# Ajouts personels :

-   Boutton de scroll en bas à droite pour facilité la navigation
-   Quelques animations au survol ( ex: Bouttons ou texte au survol des prices )
-   Animations d'entrée
