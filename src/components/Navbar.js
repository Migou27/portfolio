import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link">ACCUEIL</Link>
        </li>
        <li className="nav-item">
          <Link to="/certifications" className="nav-link">CERTIFICATIONS</Link>
        </li>
        <li className="nav-item">
          <Link to="/cv" className="nav-link">CV</Link>
        </li>
        <li className="nav-item">
          <Link to="/divers" className="nav-link">DIVERS</Link>
        </li>
        <li className="nav-item">
          <Link to="/projets" className="nav-link">PROJETS</Link>
        </li>
        <li className="nav-item">
          <Link to="/rapports-de-stages" className="nav-link">RAPPORTS DE STAGES</Link>
        </li>
        <li className="nav-item">
          <Link to="/veille-technologique" className="nav-link">VEILLE TECHNOLOGIQUE</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;