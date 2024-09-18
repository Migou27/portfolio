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
                  <embed src={CV} type="application/pdf" className='CV' />
                  <Footer></Footer>
            </div>
      );
};

export default Cv;