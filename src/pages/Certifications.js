import React from 'react';
import Navbar from '../components/Navbar';
import BadgeITE from "../images/BadgeCiscoITE.png";
import BadgeITC from "../images/BadgeCiscoITC.png";
import BadgePCAP from "../images/BadgePCAP.png";

const Certifications = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <br/>
                  <div className='space'></div>
                  <div className='grid2'>
                        <div className='technoBox'>
                              <img src={BadgeITE} alt='' className='logo' titre='Cisco IT Essentials'/>
                              <p>Certification CISCO ITE (Information Technology Essential)</p>
                        </div>
                        <div className='technoBox'>
                              <img src={BadgeITC} alt='' className='logo' titre='Cisco Introducion to Cybersecurity'/>
                              <p>Certification CISCO Introduction to Cybersecurity</p>
                        </div>
                        <div className='technoBox'>
                              <img src={BadgePCAP} alt='' className='logo' titre='PCAP - Programming Essentials in Python'/>
                              <p>PCAP - Programming Essentials in Python (En cours)</p>
                        </div>
                  </div>
                  
            </div>
      );
};

export default Certifications;