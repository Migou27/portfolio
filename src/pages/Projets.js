import React from 'react';
import Navbar from '../components/Navbar';

import logoCsharp from "../images/logoCsharp.png";
import logoExcel from "../images/logoExcel.png";
import logoPhp from "../images/logoPhp.png";
import logoSymfony from "../images/logoSymfony.png";
import logoReact from "../images/logoReact.png";

import apDigicode from "../images/AP/AP_Digicod.zip";
import apVistat from "../images/AP/AP_Vistat.zip";
import apTicket from "../images/AP/AP_Ticket.zip";
import apGarage from "../images/AP/AP_garage.zip";
import apRepas from "../images/AP/AP_Repas.zip";
import apSymfony from "../images/AP/AP_Symfony.zip";

const Projets = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <br/>
                  <div className='space'></div>
                  <div className='grid2'>
                        <div className='technoBox'>
                              <img src={logoCsharp} alt='' className='logo' title='c#'/>
                              <p>
                                    AP Digicod : 1er AP après la séparation SLAM/SISR
                                    <br/>
                                    <br/>
                                    Objectif : réaliser un digicode en c#
                                    <br/>
                                    <br/>
                                    <a href={apDigicode} download>Télécharger le projet</a>
                              </p>
                        </div>
                        <div className='technoBox'>
                              <img src={logoExcel} alt='' className='logo' title='Microsoft Excel'/>
                              <p>
                                    AP GSB VISAT : réalisé avec pour but de pousser la maîtrise d’Excel
                                    <br/>
                                    <br/>
                                    Objectif : réaliser des tableaux croisés dynamiques sur Excel à partir d'une bdd
                                    <br/>
                                    <br/>
                                    <a href={apVistat} download>Télécharger le projet</a>
                              </p>
                        </div>
                        <div className='technoBox'>
                              <img src={logoCsharp} alt='' className='logo' title='c#'/>
                              <p>
                                    AP Tickets centre Call : parfaire la programmation orientée objet (POO)
                                    <br/>
                                    <br/>
                                    Objectif : créer une application de gestion de tickets d'incidents
                                    <br/>
                                    <br/>
                                    <a href={apTicket} download>Télécharger le projet</a>
                              </p>
                        </div>
                        <div className='technoBox'>
                              <img src={logoPhp} alt='' className='logo' title='c#'/>
                              <p>
                                    AP Garage : réalisé dans le but d’apprendre à se servir de l’architecture Modèle Vue Contrôleur (MVC) en php.
                                    <br/>
                                    <br/>
                                    Objectif : créer une application de gestion de voiture dans un garage en respectant la méthode MVC
                                    <br/>
                                    <br/>
                                    <a href={apGarage} download>Télécharger le projet</a>
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
                        <div className='technoBox'>
                              <img src={logoSymfony} alt='' className='logo' title='Symfony'/>
                              <p>
                                    AP Symfony : 1er AP de la seconde année de BTS, réalisé pour apprendre à manier le framework php symfony.
                                    <br/>
                                    <br/>
                                    Objectif : créer un site dynamique pour un garagiste
                                    <br/>
                                    <br/>
                                    <a href={apSymfony} download>Télécharger le projet</a>
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
                  </div>
            </div>
      );
};

export default Projets;