import React from 'react';
import Carousel from './Carousel';

const Presentation = () => {
      return (
            <div>
                  <p className='typewriter'>Je m'appelle Miguel FENEROL, 24 ans, bienvenue sur mon portfolio.</p>
                  <br/><br/>
                  <Carousel></Carousel>
                  <div className='presBox'>
                        <p className='listeTitre'>A propos de moi : </p>
                        <p className='liste'>
                              <br/>Je suis passionné de jeux vidéos et de développement. J'aime également le badminton, la cuisine et les mangas.
                              <br/>Je suis également une personne curieuse, qui sait travaillé en équipe et de manière organisée.<br/>
                        </p>
                        <p className='listeTitre'>Mon projet professionnel :</p>
                        <div className='liste'>
                              <br/>Devenir développeur de logiciel ou d'application web en allant jusqu'au bac+5. Pour cela je suis une formation bachelor puis master chez Rouen Ynov Campus.<br/><br/>
                        </div>
                        <p className='listeTitre'>Mon parcours :</p>
                        <div className='liste'>
                              <br/>
                              <li>BTS SIO (Services informatiques aux organisations) obtenu à l'<a href="https://www.stadjutor.com/">établissement Saint Adjutor</a> de Vernon (27)</li>
                              <br/>
                              <li>1ère année en Licence IEEEA à l’université de Rouen (76)</li>
                              <br/>
                              <li>Baccalauréat scientifique spécialité Physique-Chimie en 2018 au <a href="https://malraux.lycee.ac-normandie.fr/">Lycée André Malraux</a> de Gaillon (27)</li>
                              <br/>
                              <li>Brevet des collèges en 2015 au collège Léonard de Vinci de Saint Marcel (27)</li>
                        </div>
                  </div>
            </div>
      );
};

export default Presentation;