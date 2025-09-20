import React from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logoStadjutor from '../images/logo-stadjutor.png';
import logoPyc from '../images/logoPyc.png';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <p className="brand-name">Miguel FENEROL</p>
            <p className="brand-tagline">Développeur Full‑Stack • React, Node, SQL</p>
          </div>

          <div className="footer-nav-sections">
            <div className="nav-group">
              <h4 className="nav-group-title">Navigation</h4>
              <nav className="footer-nav" aria-label="Navigation principale">
                <NavLink to="/portfolio" className="footer-link">Accueil</NavLink>
                <NavLink to="/portfolio/projets" className="footer-link">Projets</NavLink>
                <NavLink to="/portfolio/certifications" className="footer-link">Certifications</NavLink>
                <NavLink to="/portfolio/cv" className="footer-link">CV</NavLink>
                <NavLink to="/portfolio/contact" className="footer-link">Contact</NavLink>
              </nav>
            </div>

            <div className="nav-group">
              <h4 className="nav-group-title">Réseaux</h4>
              <div className="footer-social">
                <a href="https://linkedin.com/in/miguel-fenerol-0153851a8" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Profil LinkedIn (ouvre un nouvel onglet)">
                  <FaLinkedin className="social-icon" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Migou27" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Profil GitHub (ouvre un nouvel onglet)">
                  <FaGithub className="social-icon" />
                  <span>GitHub</span>
                </a>
                <a href="mailto:mig.fenerol@gmail.com" className="social-link" aria-label="Envoyer un email">
                  <span className="social-icon">@</span>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-schools">
            <h4 className="schools-title">Formation</h4>
            <div className="school-logos">
              <div className="school-logo">
                <img src={logoStadjutor} alt="Logo St-Adjutor" className="school-img" />
              </div>
              <div className="school-logo">
                <img src={logoPyc} alt="Logo Paris Ynov Campus" className="school-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} — Réalisé par Miguel FENEROL sous <a href="https://fr.legacy.reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;