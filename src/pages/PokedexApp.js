import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logoPokedexApp from '../images/logoPokedexApp.png';

const screens = [
  require('../images/pokedex/PokedexApp1.png'),
  require('../images/pokedex/PokedexApp2.png'),
  require('../images/pokedex/PokedexApp3.png'),
  require('../images/pokedex/PokedexApp4.png'),
  require('../images/pokedex/PokedexApp5.png'),
  require('../images/pokedex/PokedexApp6.png'),
  require('../images/pokedex/PokedexApp7.png'),
  require('../images/pokedex/PokedexApp8.png'),
  require('../images/pokedex/PokedexApp2-1.png'),
  require('../images/pokedex//PokedexApp2-2.png'),
];

const Badge = ({ children }) => (
  <span className="md-badge">{children}</span>
);

const SectionTitle = ({ children }) => (
  <h2 className="md-h2">{children}</h2>
);

const PokedexApp = () => {
  const onImgError = (e) => {
    e.currentTarget.src = logoPokedexApp;
  };

  return (
    <div>
      <Navbar />
      <div className="space"></div>

      <header className="proj-hero">
        <img className="proj-hero-logo" src={logoPokedexApp} alt="PokedexApp" />
        <h1 className="proj-hero-title">PokedexApp</h1>
        <p className="proj-hero-sub">Un Pokédex moderne en React Native, performant, accessible et agréable à utiliser.</p>
        <div className="proj-hero-badges">
          <Badge>React Native</Badge>
          <Badge>Expo</Badge>
          <Badge>iOS</Badge>
          <Badge>Android</Badge>
        </div>
      </header>

      <main className="proj-body">
        <section className="md-section">
          <SectionTitle>Présentation</SectionTitle>
          <div className="md-block">
            <p>
              PokedexApp est une application mobile développée avec <strong>React Native</strong> et <strong>Expo</strong> permettant de
              parcourir, rechercher et filtrer les créatures de l’univers Pokémon. L’app propose une expérience fluide grâce à un cache local,
              une navigation optimisée et un design soigné respectant les bonnes pratiques d’accessibilité.
            </p>
          </div>
        </section>

        <section className="md-section">
          <SectionTitle>Fonctionnalités principales</SectionTitle>
          <ul className="md-list">
            <li>Liste des Pokemons avec recherche par nom.</li>
            <li>Fiches détaillées: types, talents, attaques, évolutions, etc.</li>
            <li>Liste des attaques avec filtres de types et de puissance + recherche par nom.</li>
            <li>Liste des talents avec recherche par nom.</li>
            <li>Liste des objets avec recherche par nom.</li>
            <li>Calculateur de statistique fidèle aux jeux de principaux de la série.</li>
            <li>Création et enregistrement d'équipes de Pokémons dans une interface simple et intuitive, avec possibilité d'exports compatibles Showdown.</li>
          </ul>
        </section>

        <section className="md-section">
          <SectionTitle>Stack et architecture</SectionTitle>
          <div className="md-block">
            <p>
              L’architecture est orientée <em>features</em> avec des modules autonomes:
            </p>
            <pre className="md-code">
{`src/
  features/
    pokemon/
      api/         # appels PokeAPI + normalisation
      components/  # UI réutilisable (cards, chips, loaders)
      screens/     # ecrans (List, Details, Favorites)
      store/       # state slice (Zustand/Redux)
  core/
    ui/            # thèmes, tokens, design system léger
    utils/         # helpers (formatters, memo, cache)
    services/      # http client, storage, analytics`}
            </pre>
            <p>
              Le state est géré avec <strong>Zustand</strong> (ou Redux selon préférence), la donnée est mise en cache avec <strong>AsyncStorage</strong> et
              les requêtes HTTP passent par <strong>fetch</strong>/<strong>axios</strong> avec une fine couche de réessai et de détection réseau.
            </p>
          </div>
        </section>

        <section className="md-section">
          <SectionTitle>Performance et accessibilité</SectionTitle>
          <ul className="md-list">
            <li>Liste virtuelle et pagination cursor-based pour minimiser l’empreinte mémoire.</li>
            <li>Compression et lazy-loading des images, placeholders flous, et priorité sur l’écran courant.</li>
            <li>Couleurs avec contraste AA, labels explicites, navigation clavier/lecteur d’écran.</li>
          </ul>
        </section>

        <section className="md-section">
          <SectionTitle>Galerie</SectionTitle>
          <p className="md-muted">Aperçu d’une dizaine d’écrans (format mobile).</p>
          <div className="mobile-gallery">
            {screens.map((src, i) => (
              <figure key={i} className="mobile-frame">
                <img src={src} alt={`Capture ${i + 1}`} onError={onImgError} />
                <figcaption>Écran {i + 1}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="md-section">
          <SectionTitle>Roadmap</SectionTitle>
          <ul className="md-list">
            <li>Mode hors-ligne complet avec synchronisation des ressources médias.</li>
            <li>Comparateur de Pokémon et builder d’équipe.</li>
            <li>Animations plus riches (transitions partagées) et haptics.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PokedexApp;