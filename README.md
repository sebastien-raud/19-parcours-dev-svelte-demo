# Parcours :muscle:

C'est le moment de faire valider (ou revalider) certaines compétences du socle et de cette spé _Intégration Avancée_.

Et pour cela, on découpe le parcours en 2 ! :scissors:

- parcours **préparation**
- parcours **développement**

## Objectifs pédagogiques :dart:

<details><summary>Gestion de projet</summary>

* Lire un cahier des charges
* Traduire un besoin en solution technique

</details>

<details><summary>HTML, CSS & a11y</summary>

* Lister les éléments du HTML permettant d'améliorer l'accessibilité
* Utiliser les rôles ARIA pour rendre une page plus accessible
* Réaliser une intégration en utilisant Sass

</details>

<details><summary>JavaScript</summary>

* Utiliser les méchaniques de base du JS
* Utiliser les évenements en JS
* Utiliser NPM pour gérer les dépendances d'un projet

</details>

<details><summary>Svelte</summary>

* Mettre en place un projet avec le bundler ViteJs
* Démarrer un projet avec Svelte
* Découper une page en composants
* Utiliser Svelte pour créer des composants
* Assembler des composants Svelte
* Gérer les évenements avec Svelte
* Écrire un composant avec un rendu conditionnel
* Utiliser les classes conditionnelles de Svelte
* Utiliser le mécanisme de binding de Svelte
* Utiliser le mécanisme d'events de Svelte

</details>

<details><summary>Conception DB</summary>

* Définir les entités d'un futur projet
* Définir les relations entre les entités d'un futur projet
* Créer un diagramme _Entités/Associations_ (UML ou MCD)

</details>

<details><summary>Svelte & Directus</summary>

* Utiliser l'API RESTFul mise à disposition par Directus
* Utiliser fetch pour récupérer les données mises à disposition par l'API
* Utiliser fetch avec Svelte

</details>

## Le projet

Le projet est un logiciel de gestion de cartes bancaires virtuelles. Si tu ne sais pas ce que c'est, c'est une carte bancaire non physique (donc virtuelle :wink:) avec un montant défini à sa création, et dont on génère le numéro et le CVC (les 3 chiffres au dos).

Tu seras le développeur du projet pour le prestataire _kcolco_.

## Parcours #1 : _Préparation_

Avant de démarrer le développement, il faut "préparer le terrain". Et dans ce projet, cela consiste à:

- Améliorer l'accessibilité de l'intégration fournie
- Modéliser la base de données
  - un schéma Entités/Association en UML avec draw.io, diagrams.net ou plantUML
  - ou bien un MCD selon la méthode Merise avec mocodo.net
- (bonus) Convertir les styles CSS en Sass

:information_source: Comme d'habitude, tu peux (dois ?) t'aider des exercices faits en cours et de la documentation en ligne :+1:

### Eléments fournis

- cahier de charges du projet
- intégration HTML/CSS/JS non accessible

### Attendus

- code source HTML amélioré au niveau accessibilité
- schéma de base de données au format PNG ou SVG
- sources du schéma de base de données, à l'un des formats suivants
  - fichier `.drawio` pour draw.io/diagrams.net (File > Save as > Device)
  - fichier texte pour mocodo.net
  - fichier puml pour plantUML
- en bonus, source des styles au format Sass

## Parcours #2 : _Développement_

On peut désormais passer au développement. Et, soit rassuré, tu n'auras pas à développer les 3 phases du projet :relieved:

Pour cette partie du parcours, on te demande de mettre en place les fonctionnalités de la Phase 1.  
La Phase 2 est un bonus.  
Libre à toi de continuer ce projet après ce parcours, pour acquérir de l'XP. Mais dans une branche séparée :wink:

:information_source: Comme d'habitude, tu peux (dois ?) t'aider des exercices faits en cours et de la documentation en ligne :+1:

### Eléments fournis

- schéma de base de données au format PNG ou SVG
- sources plantUML du schéma de base de données
- une intégration HTML/CSS/JS accessible (mais que tu peux améliorer)
- sources des styles au format Sass
- une API RESTFul mise à disposition par Directus

### Attendus

- un frontend utilisant la librairie _Svelte_
  - découpé en plusieurs composants
  - utilisant le code Sass fourni
  - utilisant le package `svelte-spa-router` pour gérer les routes
  - récupérant les données depuis l'API REST fournie

### Infos

- tu seras peut-être amené à exécuter des requêtes **avec filtre(s)** à l'API de _Directus_, comme on est sympa (si, si) on te donne [le lien vers la doc](https://docs.directus.io/reference/query.html#rest-api-1) :wink: