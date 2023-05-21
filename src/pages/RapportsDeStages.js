import React from 'react';
import Navbar from '../components/Navbar';

import logoAAR from '../images/logoAAR.jpg';
import logoAltameos from '../images/altameosmultimedia-logo.png';
import { Link } from 'react-router-dom';

const RapportsDeStages = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <br/>
                  <div className='space'></div>
                  <div className='grid2'>
                        <Link to="/portfolio/rapports-de-stages/aar">
                        <div className='technoBox'>
                              <img src={logoAAR} alt='' className='logo' title='Action à Réaction' />
                              <p>&nbsp;&nbsp;&nbsp;&nbsp;Stage réalisé du 30 mai 2022 au 1er juillet 2022</p>
                        </div>
                        </Link>
                        <Link to="/portfolio/rapports-de-stages/altameos">
                        <div className='technoBox'>
                              <img src={logoAltameos} alt='' className='logo' title='Altameos multimedia' />
                              <p>Stage réalisé du 9 janvier 2023 au 17 février 2023</p>
                        </div>
                        </Link>
                  </div>
            </div>
      );
};

export default RapportsDeStages;