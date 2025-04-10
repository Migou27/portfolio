import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'; // Assurez-vous d'avoir un fichier CSS correspondant

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand-container">
          <Link to="/portfolio/" className="nav-brand">Portfolio</Link>
          
          {/* Menu déroulant */}
          <div className="dropdown-menu">
            <ul className="dropdown-list">
              <li><a href="/portfolio/#ide">IDE</a></li>
              <li><a href="/portfolio/#web">Technos Web</a></li>
              <li><a href="/portfolio/#mobile">Technos Mobiles</a></li>
              <li><a href="/portfolio/#autre">Autre technos et logiciels</a></li>
            </ul>
          </div>
        </div>
        
        <div className="nav-right">
          {location.pathname !== '/portfolio/cv' && (
            <Link to="/portfolio/cv" className="nav-link">CV</Link>
          )}
          {location.pathname !== '/portfolio/certifications' && (
            <Link to="/portfolio/certifications" className="nav-link">CERTIFICATIONS</Link>
          )}
          {location.pathname !== '/portfolio/projets' && (
            <Link to="/portfolio/projets" className="nav-link">PROJETS</Link>
          )}
          {location.pathname !== '/portfolio/contact' && (
            <Link to="/portfolio/contact" className="nav-link">CONTACT</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;