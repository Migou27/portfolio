import React from 'react';

import Navbar from './Navbar';

import rdsAltameos from '../images/pdf/RapportDeStageAltameos.pdf'

const StageAltameos = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <br/>
                  <div className='space'></div>
                  <div className='technoBox'>
                        <p>
                              L'objectif de ce stage était de réaliser un site marketplace (style Amazon) sous la technologie Angular afin de vendre des produits à destination de personnes en situation de handicap.
                              <br/>
                              <br/>
                              Ce stage a été effectué en collaboration avec 
                              <br/>
                              <br/>
                              <li className='liste'><a href='http://damien-nolle.nexgate.ch/' target="_blank">NOLLE Damien</a></li>
                              <br/>
                              <li className='liste'><a href="http://zabesu.ch" target="_blank">ZABETH Romain</a></li>
                              <br/>
                              <li className='liste'><a href="https://www.swerk.dev" target="_blank">SKWERES Oliwer</a></li>
                              <br/>
                              <li className='liste'><a href="http://hugo-poquet.nexgate.ch/" target="_blank">POQUET Hugo</a></li>
                              <br/>
                              <li className='liste'><a href="https://micheletmax.fr" target="_blank">MICHELET Max</a></li>
                              <br/>
                              <br/>
                              <a href={rdsAltameos} target="_blank">Télécharger le rapport</a>
                        </p>
                  </div>
            </div>
      );
};

export default StageAltameos;