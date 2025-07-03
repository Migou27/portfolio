# PokedexApp

Une application complète de gestion et d’exploration de Pokémon, avec une API Node.js, un back-office d’administration web, et une application front mobile.

---

## 🚀 Description

**PokedexApp** est une solution moderne pour explorer, gérer et administrer un Pokédex enrichi. Elle propose une API REST performante, un back-office web pour l’administration, et une application mobile intuitive pour les utilisateurs finaux.

---

## 🛠️ Technologies utilisées

- **Backend** : Node.js, Express, MongoDB, Mongoose, JWT, BcryptJS
- **BackOffice** : HTML, CSS, JavaScript (vanilla)
- **Frontend Mobile** : React Native (Expo)
- **Autres** : Git, Nodemon

---

## 📦 Structure du projet

```
PokedexApp-Back/         # API REST (Node.js/Express)
PokedexApp-BackOffice/   # Interface d'administration web
PokedexApp-Front/        # Application mobile (React Native)
```

---

## ✨ Fonctionnalités principales

### Backend (API)
- Authentification JWT (connexion, inscription)
- Gestion des utilisateurs (CRUD)
- Gestion des Pokémon (CRUD)
- Gestion des attaques/moves (CRUD)
- Gestion des objets/items (CRUD)
- Gestion des natures (CRUD)
- Sécurité des routes via middlewares

### BackOffice
- Tableau de bord d’administration
- Gestion des utilisateurs, Pokémon, attaques et objets via interface web
- Ajout, modification, suppression, recherche
- Authentification admin

### Frontend Mobile
- Consultation du Pokédex (liste, détails)
- Recherche et filtres avancés
- Calculateur de statistiques Pokémon
- Gestion de compte utilisateur
- Interface moderne et responsive

---

## ⚡ Installation & Lancement

### 1. Backend
```sh
cd PokedexApp-Back
npm install
npm run dev
```

### 2. BackOffice (non fonctionnel)
Ouvre `PokedexApp-BackOffice/index.html` dans ton navigateur.

### 3. Frontend Mobile
```sh
cd PokedexApp-Front
npm install
npx expo start
```

---

## 📚 Auteur

- Migou27
- Ilyes360

---

## 📄 Licence

Projet open-source sous licence