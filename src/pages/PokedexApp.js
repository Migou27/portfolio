import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logoPokedexApp from '../images/logos/logoPokedexApp.png';

const screens = [
  require('../images/pokedex/PokedexApp1.png'),
  require('../images/pokedex/PokedexApp2.png'),
  require('../images/pokedex/PokedexApp3.png'),
  require('../images/pokedex/PokedexApp4.png'),
  require('../images/pokedex/PokedexApp5.png'),
  require('../images/pokedex/PokedexApp6.png'),
  require('../images/pokedex/PokedexApp7.png'),
  require('../images/pokedex/PokedexApp8.png'),
  require('../images/pokedex/PokedexApp9.png'),
  require('../images/pokedex/PokedexApp10.png'),
];

const Badge = ({ children }) => <span className="md-badge">{children}</span>;
const SectionTitle = ({ children }) => <h2 className="md-h2">{children}</h2>;

const PokedexApp = () => {
  const [zoomedImg, setZoomedImg] = useState(null);

  const onImgError = (e) => { e.currentTarget.src = logoPokedexApp; };

  return (
    <div>
      <Navbar />
      <div className="space"></div>

      <header className="proj-hero">
        <img className="proj-hero-logo" src={logoPokedexApp} alt="PokedexApp" />
        <h1 className="proj-hero-title">PokedexApp</h1>
        <p className="proj-hero-sub">
          Un Pokédex moderne en React Native, rapide, accessible et pensé pour le jeu compétitif.
        </p>
        <div className="proj-hero-badges">
          <Badge>React Native</Badge>
          <Badge>Expo</Badge>
          <Badge>AsyncStorage</Badge>
          <Badge>iOS</Badge>
          <Badge>Android</Badge>
        </div>
      </header>

      <main className="proj-body">
        <section className="md-section">
          <SectionTitle>Présentation</SectionTitle>
          <div className="md-block">
            <p>
              <strong>PokedexApp</strong> est une application mobile développée avec React Native et Expo.
              Elle permet d’explorer l’univers Pokémon grâce à une interface fluide et accessible,
              tout en stockant les données localement via <strong>AsyncStorage</strong>.
              Seules les images sont chargées depuis le web.
            </p>
            <p>
              L’objectif est de proposer un outil pratique pour les joueurs,
              avec une navigation rapide, un cache efficace, et un design soigné.
            </p>
          </div>
        </section>

        <section className="md-section">
          <SectionTitle>Fonctionnalités principales</SectionTitle>
          <ul className="md-list">
            <li>Liste des Pokémons avec recherche par nom.</li>
            <li>Fiches détaillées : types, talents, attaques, évolutions, etc.</li>
            <li>Liste des attaques avec filtres de types et de puissance + recherche par nom.</li>
            <li>Liste des talents avec recherche par nom.</li>
            <li>Liste des objets avec recherche par nom.</li>
            <li>Calculateur de statistiques fidèle aux jeux principaux de la série.</li>
            <li>Créateur et gestion d’équipes stratégiques avec export compatible <strong><a href="https://play.pokemonshowdown.com/" target='_blank'>Pokemon Showdown</a></strong>.</li>
          </ul>
        </section>

        <section className="md-section">
          <SectionTitle>Galerie</SectionTitle>
          <p className="md-muted">Cliquez sur une capture pour l’agrandir.</p>
          <div className="gallery-grid">
            {screens.map((src, i) => (
              <figure key={i} className="gallery-item" onClick={() => setZoomedImg(src)}>
                <img src={src} alt={`Capture ${i + 1}`} onError={onImgError} />
                <figcaption>Écran {i + 1}</figcaption>
              </figure>
            ))}
          </div>

          {zoomedImg && (
            <div className="lightbox" onClick={() => setZoomedImg(null)}>
              <span className="lightbox-close" onClick={() => setZoomedImg(null)}>×</span>
              <img className="lightbox-img" src={zoomedImg} alt="Zoom" />
            </div>
          )}
        </section>

        <section className="md-section">
          <SectionTitle>Roadmap</SectionTitle>
          <ul className="md-list">
            <li>Amélioration des interfaces de recherche (par type, numéro, région...)</li>
            <li>Amélioration du mode hors-ligne complet (images incluses).</li>
            <li>Amélioration de la base de données pour ajouter un support Fr au minimum, ainsi que les description de Pokedex en fonction des gen etc...</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PokedexApp;
