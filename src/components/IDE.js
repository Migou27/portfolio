import React from 'react';
import logoVsCode from "../images/logoVsCode.png";
import logoVs from "../images/logoVs.png";

const IDE = () => {
      return (
            <div>
                  <p className='titre'>Mes IDE : </p>
                  <div className='grid2'>
                        <div className='technoBox'>
                              <img src={logoVsCode} alt="" className='logo' title='Visual Studio Code'/>
                              Visual studio code, pour ce qui est des langages web en tout genre.
                        </div>
                        <div className='technoBox'>
                              <img src={logoVs} alt="" className='logo' title='Visual Studio'/>
                              Visual studio 2022 pour le c#
                        </div>
                  </div>                  
            </div>
      );
};

export default IDE;