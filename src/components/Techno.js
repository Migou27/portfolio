import React from 'react';
import logoHtml5 from "../images/logoHtml5.png";
import logoCss3 from "../images/logoCss3.png";
import logoPhp from "../images/logoPhp.png";
import logoAngular from "../images/logoAngular.png";
import logoReact from "../images/logoReact.png";
import logoMySQL from "../images/logoMySQL.png";
import logoPhpMyAdmin from "../images/logoPhpMyAdmin.png";
import logoSqlServer from "../images/logoSqlServer.png";
import logoCsharp from "../images/logoCsharp.png";
import logoGitKraken from "../images/logoGitKraken.png";
import logoVBA from "../images/logoVBA.png";

const Techno = () => {
      return (
            <div>
                  <p className='titre'> Mes technos Web : </p>
                  <div className='grid2'>
                        <div className='technoBox'>
                              <img src={logoHtml5} alt="" className='logo' title='HTML 5'/>
                              <img src={logoCss3} alt="" className='logo' title='CSS 3'/>
                              HTML et CSS pour la conception de sites web
                        </div>
                        <div className='technoBox'>
                              <img src={logoPhp} alt="" className='logo' title='PHP 8'/>
                              PHP pour la création de sites web dynamiques, notamment via un serveur
                        </div>
                        <div className='technoBox'>
                              <img src={logoAngular} alt="" className='logo' title='Angular'/>
                              Angular, framework open-source basé sur le typeScript pour réaliser des sites web complexes
                        </div>
                        <div className='technoBox'>
                              <img src={logoReact} alt="" className='logo' title='ReactJs'/>
                              ReactJs, framework open-source, basé sur le javascript, servant à créer des sites avec une interface utilisateur
                        </div>
                  </div>
                  <p className='titre'> Autres technos et logiciels utilisés : </p>
                  <div className='grid2'>
                        <div className='technoBox'>
                              <img src={logoMySQL} alt="" className='logo' title='MySQL'/>
                              <img src={logoPhpMyAdmin} alt="" className='logo' title='PhpMyAdmin'/>
                              <img src={logoSqlServer} alt="" className='logo' title='Microsoft SQL Server'/>
                        </div>
                        <div className='technoBox'>
                              <img src={logoCsharp} alt="" className='logo' title='c#'/>
                              Le c# notamment utilisé pour des logiciels en client lourd
                        </div>
                        <div className='technoBox'>
                              <img src={logoGitKraken} alt="" className='logo' title='GitKraken'/>
                              La technologie Git, notamment GitKraken qui lui sert d'interface graphique
                        </div>
                        <div className='technoBox'>
                              <img src={logoVBA} alt="" className='logo' title='Microsoft Virtual Basic for Applications'/>
                              Le VBA pour ajouter du code et des macros derrière les outils de la licence Office
                        </div>
                  </div>
            </div>
      );
};

export default Techno;