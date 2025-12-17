# Test 1 - Interface de Gestion de Transactions

## Description
Interface web responsive affichant une liste de transactions avec statuts et actions.
Cette page présente une liste de transactions avec :
- montant, date et statut
- badges de statut différenciés
- actions contextuelles selon l’état de la transaction
Les données sont simulées via un mock local.
## Technologies
- React / Next.js 16
- JavaScript (ES6+)
- CSS3

## Fonctionnalités
- Affichage de la liste des transactions
- Filtrage par statut (Tous, Succès, En attente, Échec)
- Badges colorés selon le statut
- Actions : Voir détails et Annuler
- Design responsive (mobile, tablette, desktop)
- Annulation conditionnelle (uniquement transactions "En attente")

##  Installation

\`\`\`bash
npm install
npm run dev
\`\`\`

Ouvrir [http://localhost:3000](http://localhost:3000)

##  Structure du projet

\`\`\`
src/
├── app/
│   ├── page.tsx          # Point d'entrée
│   └── globals.css       # Styles globaux
├── pages/
│   └── PageTransactions.jsx
├── composants/
│   ├── ListeTransactions.jsx
│   ├── LigneTransaction.jsx
│   ├── BadgeStatut.jsx
│   └── ActionsTransaction.jsx
└── donnees/
    └── transactionsMock.js
\`\`\`

## Captures d'écran

### Desktop
![alt text](image-1.png)

### Mobile
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)
![alt text](image-5.png)
# Test 2 - Intégration & Consommation d'API
Les données des transactions sont récupérées via une API REST mockée créée avec MockAPI.
L'appel API est effectué au chargement de la page.
Les états suivants sont gérés: 
- chargement des données,
- affichage des transactions
- gestion des erreurs en cas d'échec de la requête.

API utilisée:   MockAPI : https://6942af7069b12460f3126625.mockapi.io/

# Test 3 - Réflexion UX
### Proposition d'amélioration: 
- Language naturel : remplacer le vocabulaire bancaire par des phrases simples au sein de l'application.
- utiliser des icônes plus explicites
- intégrer des petites vidéos de 15 secondes sans son pour montrer comment faire des actions spécifiques sur l'application