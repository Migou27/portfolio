import React from 'react';
import Navbar from './Navbar';

import rdsAAR from '../images/pdf/RapportDeStageAAR.pdf';

const StageAAR = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <br/>
                  <div className='space'></div>
                  <div className='technoBox'>
                        <p>
                              L'objectif de ce stage était de réaliser un site pour l'association permettant la consultation des festivals en tout genre en France.
                              <br/>
                              <br/>
                              Ce stage a été effectué en collaboration avec 
                              <br/>
                              <br/>
                              <li className='liste'><a href="http://zabesu.ch">ZABETH Romain</a></li>
                              <br/>
                              <br/>
                              <a href={rdsAAR} target="_blank">Télécharger le rapport</a>
                        </p>
                  </div>
            </div>
      );
};

export default StageAAR;