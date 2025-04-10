import React from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">© {new Date().getFullYear()} - Réalisé par Miguel FENEROL sous <a href="https://fr.legacy.reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJs</a></p>
        <div className="social-links">
          <a href="https://linkedin.com/in/miguel-fenerol-0153851a8" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin className="social-icon" /> LinkedIn
          </a>
          <a href="https://github.com/Migou27" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub className="social-icon" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;