import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="page-container">
      <Navbar />
      <br/>
      <div className='space'></div>

      <header className="proj-hero">
        <h1 className="proj-hero-title">Page introuvable</h1>
        <p className="proj-hero-sub">La page que vous cherchez n'existe pas ou a été déplacée.</p>
      </header>

      <main className="proj-body">
        <section className="md-section">
          <h2 className="md-h2">Que souhaitez-vous faire ?</h2>
          <p>Retourner à l'accueil ou parcourir les projets.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link className='btn btn-primary' to="/portfolio">Accueil</Link>
            <Link className='btn btn-ghost' to="/portfolio/projets">Voir les projets</Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;


