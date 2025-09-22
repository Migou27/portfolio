import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BadgeITE from "../images/BadgeCiscoITE.png";
import BadgeITC from "../images/BadgeCiscoITC.png";
import BadgePCAP from "../images/BadgePCAP.png";

const Certifications = () => {
      return (
            <div className="page-container">
                  <Navbar></Navbar>
                  <br/>
                  <div className='space'></div>
                  
                  <div className='certifications-section'>
                        <h1 className='section-title'>Mes Certifications</h1>
                        
                        <div className='grid2'>
                              <div className='technoBox'>
                                    <img src={BadgeITE} alt='Badge Cisco IT Essentials' className='logo' title='Cisco IT Essentials'/>
                                    <p>Certification CISCO ITE <br/>(Information Technology Essential)</p>
                              </div>
                              <div className='technoBox'>
                                    <img src={BadgeITC} alt='Badge Cisco Introduction to Cybersecurity' className='logo' title='Cisco Introduction to Cybersecurity'/>
                                    <p>Certification CISCO <br/>Introduction to Cybersecurity</p>
                              </div>
                        </div>
                  </div>
                  
                  <Footer></Footer>
            </div>
      );
};

export default Certifications;