import React from 'react';
import Navbar from '../components/Navbar';
import logoTel from '../images/logoTel.png';
import logoMail from '../images/logoMail.png';
import logoLinkedin from '../images/logoLinkedin.png';
import logoGithub from '../images/logoGithub.png';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="page-container">
            <Navbar />
            <br/>
            <div className='space'></div>
            
            <div className='contact-section'>
                <h1 className='section-title'>Me Contacter</h1>
                
                <div className='presBox'>
                    <div className='grid2'>
                        <div className='contactBox'>
                            <img src={logoTel} alt='Téléphone' className='logo' title='Téléphone' />
                            <p className='contactText'>06 08 66 29 97</p>
                        </div>
                        <div className='contactBox'>
                            <img src={logoMail} alt='Email' className='logo' title='Email' />
                            <a className='contactText' href='mailto:miguel.fenerol@gmail.com'>miguel.fenerol@gmail.com</a>
                        </div>
                        <div className='contactBox'>
                            <img src={logoLinkedin} alt='LinkedIn' className='logo' title='LinkedIn' />
                            <a className='contactText' href="https://linkedin.com/in/miguel-fenerol-0153851a8" target='_blank' rel='noopener noreferrer'>Miguel FENEROL</a>
                        </div>
                        <div className='contactBox'>
                            <img src={logoGithub} alt='GitHub' className='logo' title='GitHub' />
                            <a className='contactText' href="https://github.com/Migou27" target='_blank' rel='noopener noreferrer'>Migou27</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default Contact;