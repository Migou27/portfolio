import React from 'react';
import Navbar from '../components/Navbar';
import CV from '../images/pdf/CV_Miguel_FENEROL.pdf';
import Footer from '../components/Footer';

const Cv = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <br/>
                  <div className='space'></div>
                  <div className='cv-section'>
                        <h1 className='section-title'>Curriculum Vitae</h1>
                        <div className='cv-download'>
                              <a 
                                    href={CV} 
                                    download="CV_Miguel_FENEROL.pdf"
                                    className='download-link'
                              >
                                    Télécharger mon CV
                              </a>
                        </div>
                        <embed src={CV} type="application/pdf" className='CV' />
                  </div>
                  <Footer></Footer>
            </div>
      );
};

export default Cv;