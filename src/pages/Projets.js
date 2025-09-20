import React from 'react';
import Navbar from '../components/Navbar';

import logoCsharp from "../images/logos/logoCsharp.png";
import logoPhp from "../images/logos/logoPhp.png";
import logoReact from "../images/logos/logoReact.png";
import logoBody from "../images/logos/logoBody.png";
import logoPokedexApp from "../images/logos/logoPokedexApp.png";

import apRepas from "../images/AP/AP_Repas.zip";
import Footer from '../components/Footer';

const Projets = () => {
  return (
    <div>
      <Navbar></Navbar>
      <br/>
      <div className='space'></div>

      <section className='projects-hero'>
        <h1 className='projects-title'>Mes projets</h1>
      </section>

      <div className='projects-container'>
        <div className='projects-grid'>

        <div className='project-card'>
            <div className='project-media'>
              <img src={logoBody} alt='Logo Body and Soul Healing' className='project-logo' title='Body'/>
            </div>
            <div className='project-content'>
              <h3 className='project-card-title'>Body and Soul Healing</h3>
              <p className='project-desc'>
                Site web réalisé avec wordpress, permettant de promouvoir une activité professionnelle via des pages de présentation, prestations...
              </p>
              <div className='project-actions'>
                <a className='btn btn-primary' href="https://body-and-soul-healing.fr/" target="_blank" rel="noreferrer">
                  Visiter le site
                </a>
              </div>
            </div>
          </div>

          <div className='project-card'>
            <div className='project-media'>
              <img src={logoPokedexApp} alt='LogoPokedexApp' className='project-logo' title='PokedexApp'/>
            </div>
            <div className='project-content'>
              <h3 className='project-card-title'>PokedexApp</h3>
              <p className='project-desc'>
                Comme son nom l'indique, c'est un Pokedex (répertoire des Pokémons) réalisé avec React Native et Expo, avec plein d'autres fonctionnalités.
              </p>
              <div className='project-actions'>
                <a className='btn btn-primary' href="/portfolio/projets/pokedexapp" rel="noreferrer">
                  Plus de détails
                </a>
              </div>
            </div>
          </div>

          <div className='project-card'>
            <div className='project-media'>
              <img src={logoPhp} alt='PHP' className='project-logo' title='PHP'/>
            </div>
            <div className='project-content'>
              <h3 className='project-card-title'>AP Repas Elior</h3>
              <p className='project-desc'>
                Gestion de pages web avec différents états de connexion. Objectif : application de réservation de repas avec gestion de rôles.
              </p>
              <div className='project-actions'>
                <a className='btn btn-ghost' href={apRepas} download>
                  Télécharger le projet
                </a>
              </div>
            </div>
          </div>

          <div className='project-card'>
            <div className='project-media'>
              <img src={logoCsharp} alt='C#' className='project-logo' title='c#'/>
            </div>
            <div className='project-content'>
              <h3 className='project-card-title'>AP GSB_gesAMM</h3>
              <p className='project-desc'>
                2ème AP de la seconde année de BTS. Objectif : gérer les autorisations de mise sur le marché de médicaments via un suivi d’étapes.
              </p>
              <div className='project-actions'>
                <a className='btn btn-primary' href="https://github.com/Migou27/GSB-gesAMM" target="_blank" rel="noreferrer">
                  Voir sur GitHub
                </a>
              </div>
            </div>
          </div>

          <div className='project-card'>
            <div className='project-media'>
              <img src={logoPhp} alt='PHP' className='project-logo' title='PHP'/>
            </div>
            <div className='project-content'>
              <h3 className='project-card-title'>AP Repas Elior</h3>
              <p className='project-desc'>
                Gestion de pages web avec différents états de connexion. Objectif : application de réservation de repas avec gestion de rôles.
              </p>
              <div className='project-actions'>
                <a className='btn btn-ghost' href={apRepas} download>
                  Télécharger le projet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Projets;