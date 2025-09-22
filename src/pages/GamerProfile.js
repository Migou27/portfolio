import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logoReact from '../images/logos/logoReact.png';

// Captures d'écran du projet Gamer Profile
const screens = [
  require('../images/gamerProfile/GamerProfile1.png'),
  require('../images/gamerProfile/GamerProfile2.png'),
  require('../images/gamerProfile/GamerProfile3.png'),
  require('../images/gamerProfile/GamerProfile4.png')
];

const Badge = ({ children }) => <span className="md-badge">{children}</span>;
const SectionTitle = ({ children }) => <h2 className="md-h2">{children}</h2>;

const GamerProfile = () => {
  const [zoomedImg, setZoomedImg] = useState(null);

  const onImgError = (e) => { e.currentTarget.src = logoReact; };

  return (
    <div className="gp-page">
      <Navbar />
      <div className="space"></div>

      <header className="proj-hero">
        <img className="proj-hero-logo" src={logoReact} alt="Gamer Profile" />
        <h1 className="proj-hero-title">Gamer Profile</h1>
        <p className="proj-hero-sub">
          Une application web complète pour gérer et partager ma collection de jeux vidéo et 
          mes codes amis.
        </p>
        <div className="proj-hero-badges">
          <Badge>React 18</Badge>
          <Badge>Node.js</Badge>
          <Badge>MongoDB</Badge>
          <Badge>Express.js</Badge>
          <Badge>Socket.io</Badge>
          <Badge>JWT</Badge>
        </div>
      </header>

      <main className="proj-body">
        <section className="md-section">
          <SectionTitle>Présentation</SectionTitle>
          <div className="md-block">
            <p>
              <strong>Gamer Profile</strong> est une application web complète développée avec React 18 et Node.js.
              Elle permet de gérer et partager ma collection de jeux vidéo et mes codes amis
              grâce à une interface moderne et responsive.
            </p>
            <p>
              L'application propose un système d'authentification sécurisé, une gestion complète des jeux,
              des codes amis multi-plateformes, et des statistiques personnalisées pour suivre mon activité gaming.
            </p>
            <p><a href="https://github.com/Migou27/GamerProfile-Back" target="_blank">Lien github back</a></p>
            <p><a href="https://github.com/Migou27/GamerProfile-Front" target="_blank">Lien github front</a></p>
          </div>
        </section>

        <section className="md-section">
          <SectionTitle>Fonctionnalités principales</SectionTitle>
          <ul className="md-list">
            <li><strong>Gestion des jeux</strong> : Catalogue complet avec recherche avancée par nom, console ou année de sortie.</li>
            <li><strong>Collection personnelle</strong> : Suivi de progression (Fini, En cours, Fini et joue encore).</li>
            <li><strong>Codes amis</strong> : Gestion centralisée des codes multijoueur (Divers jeux et consoles).</li>
            <li><strong>Authentification sécurisée</strong> : Système JWT avec inscription et connexion.</li>
            <li><strong>Interface moderne</strong> : Design responsive avec thème clair/sombre et support multilingue.</li>
            <li><strong>Statistiques</strong> : Visualisation de votre activité avec des graphiques interactifs.</li>
          </ul>
        </section>

        <section className="md-section">
          <SectionTitle>Fonctionnalités secondaires</SectionTitle>
          <ul className="md-list">
            <li>Système de notifications complètement personalisables</li>
            <li>Traduction FR/EN via i18n</li>
            <li>Interceptor pour les requêtes API</li>
            <li>WebSockets pour la communication temps réel</li>
            <li>Détection automatique de la langue et du thème</li>
            <li>Faceted search pour la recherche avancée et statistiques</li>
          </ul>
        </section>

        <section className="md-section">
          <SectionTitle>Technologies utilisées</SectionTitle>
          <div className="md-block">
            <h3>Frontend</h3>
            <ul className="md-list">
              <li><strong>React 18</strong> — Interfaces dynamiques</li>
              <li><strong>Vite</strong> — Bundler ultra-rapide</li>
              <li><strong>React Router DOM</strong> — Navigation et routage</li>
              <li><strong>Axios</strong> — Requêtes API</li>
              <li><strong>Recharts</strong> — Graphiques et visualisation</li>
              <li><strong>i18next</strong> — Internationalisation</li>
            </ul>
            
            <h3>Backend</h3>
            <ul className="md-list">
              <li><strong>Node.js</strong> — Runtime JavaScript côté serveur</li>
              <li><strong>Express.js</strong> — Framework minimaliste</li>
              <li><strong>MongoDB</strong> — Base de données NoSQL</li>
              <li><strong>Mongoose</strong> — ODM pour gérer les modèles</li>
              <li><strong>Socket.io</strong> — WebSockets bidirectionnels</li>
              <li><strong>JWT</strong> — Authentification stateless</li>
            </ul>
          </div>
        </section>

        <section className="md-section">
          <SectionTitle>Captures d'écran</SectionTitle>
          <p className="md-muted">Cliquez sur une capture pour l'agrandir et voir les détails de l'interface.</p>
          <div className="gallery-grid gp-gallery">
            {screens.map((src, i) => (
              <figure key={i} className="gallery-item" onClick={() => setZoomedImg(src)}>
                <img 
                  src={src} 
                  alt={`Capture d'écran ${i + 1} - Interface Gamer Profile`} 
                  onError={onImgError}
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease'
                  }}
                />
                <figcaption>Interface {i + 1}</figcaption>
              </figure>
            ))}
          </div>

          {zoomedImg && (
            <div className="lightbox" onClick={() => setZoomedImg(null)}>
              <span className="lightbox-close" onClick={() => setZoomedImg(null)}>×</span>
              <img 
                className="lightbox-img" 
                src={zoomedImg} 
                alt="Capture d'écran agrandie" 
                style={{
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  objectFit: 'contain'
                }}
              />
            </div>
          )}
        </section>

        <section className="md-section">
          <SectionTitle>Roadmap</SectionTitle>
          <ul className="md-list">
            <li>Amélioration du design et de l'UI/UX.</li>
            <li>Ajout d'un système d'ajout de jeux via une api externe.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GamerProfile;