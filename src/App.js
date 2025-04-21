import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Certifications from './pages/Certifications';
import Cv from './pages/Cv';
import Projets from './pages/Projets';
import Contact from './pages/Contact.js';
import LogTracker from './services/LogTracker.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="app-container">
        <LogTracker/>
        <Routes>
          <Route path="/portfolio" element={<Home/>} />
          <Route path="/portfolio/certifications" element={<Certifications/>} />
          <Route path="/portfolio/cv" element={<Cv/>} />
          <Route path="/portfolio/projets" element={<Projets/>} />
          <Route path="/portfolio/contact" element={<Contact/>} />
        </Routes>
        </div>
      </BrowserRouter>  
    </div>
  );
}

export default App;
