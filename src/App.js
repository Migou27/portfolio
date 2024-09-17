import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Certifications from './pages/Certifications';
import Cv from './pages/Cv';
import RapportsDeStage from './pages/RapportsDeStages';
import VeilleTechno from './pages/VeilleTechno';
import StageAAR from './components/StageAAR';
import StageAltameos from './components/StageAltameos';
import Projets from './pages/Projets';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio" element={<Home/>} />
          <Route path="/portfolio/certifications" element={<Certifications/>} />
          <Route path="/portfolio/cv" element={<Cv/>} />
          <Route path="/portfolio/projets" element={<Projets/>} />
          <Route path="/portfolio/rapports-de-stages" element={<RapportsDeStage/>} />
          <Route path="/portfolio/rapports-de-stages/aar" element={<StageAAR/>} />
          <Route path="/portfolio/rapports-de-stages/altameos" element={<StageAltameos/>} />
          <Route path="/portfolio/veille-technologique" element={<VeilleTechno/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
