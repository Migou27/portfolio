import React from 'react';
import Navbar from '../components/Navbar';

import logoCsharp from "../images/logoCsharp.png";
import logoPhp from "../images/logoPhp.png";
import logoReact from "../images/logoReact.png";

import apRepas from "../images/AP/AP_Repas.zip";
import Footer from '../components/Footer';

const Projets = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <br/>
                  <div className='space'></div>
                  <div className='grid2'>
                        <div className='technoBox'>
                              <img src={logoReact} alt='' className='logo' title='ReactJs'/>
                              <p>
                                    AP TKT-lonic : dernier AP de la seconde année de BTS.
                                    <br/>
                                    <br/>
                                    Objectif : créer un site interne de gestion des animaux pour le zoo de Cerza.
                                    <br/>
                                    <br/>
                                    <a href="https://github.com/Zabesu28/cerza-pro" target="_blank">Lien vers le projet</a>
                              </p>
                        </div>
                        <div className='technoBox'>
                              <img src={logoCsharp} alt='' className='logo' title='c#'/>
                              <p>
                                    AP GSB_gesAMM : 2ème AP de la seconde année de BTS.
                                    <br/>
                                    <br/>
                                    Objectif : gérer les autorisations de mise sur le marché de médicaments via un suivi d’étapes.
                                    <br/>
                                    <br/>
                                    <a href="https://github.com/Migou27/GSB-gesAMM" target="_blank">Lien vers le projet</a>
                              </p>
                        </div>
                        <div className='technoBox'>
                              <img src={logoPhp} alt='' className='logo' title='PHP'/>
                              <p>
                                    AP Repas Elior : l’objectif était de gérer des pages web avec différents état de connexion
                                    <br/>
                                    <br/>
                                    Objectif : créer une application de réservation de repas en gérant différent types d'utilisateurs
                                    <br/>
                                    <br/>
                                    <a href={apRepas} download>Télécharger le projet</a>
                              </p>
                        </div>
                  </div>
                  <Footer></Footer>
            </div>
      );
};

export default Projets;