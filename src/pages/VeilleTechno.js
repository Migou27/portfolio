import React from 'react';
import Navbar from '../components/Navbar';

import veille1 from '../images/pdf/LaRéalitéVirtuelleDansLeMédical.pdf';
import veille2 from '../images/pdf/LePlaystationVR2.pdf';
import veille3 from '../images/pdf/LesLunettesRA-VR.pdf';
import veille4 from '../images/pdf/ActualitésSurLaRA-VR.pdf';
import veille5 from '../images/pdf/LarivéeDeLaVRDansLeDomaineDeLéducation.pdf';

const VeilleTechno = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <br/>
                  <div className='space'></div>
                  <p className='titre2'>La réalité virtuelle</p>
                  <div className='presBox'>
                        <p className="texteVeille">Couramment appelée VR, la réalité virtuelle est le fait de simuler numériquement un environnement par la machine. L'utilisateur peut vivre cette simulation par le biais de différents sens, le plus courant étant la vue. Pour ce qui est de la vue, la simulation se fait via un casque de réalité virtuelle qui fonctionne sur le principe de la stéréoscopie (technique d'obtention d'un relief par le biais de deux images d'un objet) permettant de leurrer le cerveau afin d'utiliser son interprétation des images à notre escient. Ces images sont générées par ordinateur sont crées par des lentilles placées en face des yeux puis sont retransmises dans le casque.
                        Originellement conçue pour le milieux du jeu vidéo, la VR reste néanmoins une technologie dont on peut faire usage dans d'autres secteurs. L'objectif de cette veille technologique est de montrer comment l'évolution de la réalité virtuelle peut toucher certains secteurs de la vie quotidienne.</p>
                  </div>
                  <p className='titre'>Mes différentes veilles : </p>
                  <div className='grid2'>
                        <div className='technoBox'>
                              <a href={veille1} target="_blank">La réalité virtuelle dans le domaine médical</a>
                        </div>
                        <div className='technoBox'>
                              <a href={veille2} target="_blank">Le Playstation VR2</a>
                        </div>
                        <div className='technoBox'>
                              <a href={veille3} target="_blank">Les lunettes de réalité augmentée/virtuelle</a>
                        </div>
                        <div className='technoBox'>
                              <a href={veille4} target="_blank">Actualités sur la RA-VR</a>
                        </div>
                        <div className='technoBox'>
                              <a href={veille5} target="_blank">La VR dans l'éducation</a>
                        </div>
                  </div>
            </div>
      );
};
export default VeilleTechno;