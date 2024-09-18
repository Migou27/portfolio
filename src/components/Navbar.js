import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import { useLocation } from 'react-router-dom';

function Navbar() {

  const location = useLocation();

  return (
    <nav className="navbar">
      <label>
        <Link to="/portfolio/" className="nav-brand">FENEROL Miguel</Link>
      </label>
      <label className="nav-right">
        {location.pathname != '/portfolio/cv' && <Link to="/portfolio/cv" className="nav-link">CV</Link>}
        {location.pathname != '/portfolio/certifications' && <Link to="/portfolio/certifications" className="nav-link">CERTIFICATIONS</Link>}
        {location.pathname != '/portfolio/projets' && <Link to="/portfolio/projets" className="nav-link">PROJETS</Link>}
        {location.pathname != '/portfolio/contact' && <Link to="/portfolio/contact" className="nav-link">CONTACT</Link>}
      </label>
    </nav>
  );
}

export default Navbar;