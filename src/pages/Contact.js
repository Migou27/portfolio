import React from 'react';
import Navbar from '../components/Navbar';
import logoTel from '../images/logos/logoTel.png';
import logoMail from '../images/logos/logoMail.png';
import logoLinkedin from '../images/logos/logoLinkedin.png';
import logoGithub from '../images/logos/logoGithub.png';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="page-container">
            <Navbar />
            <br/>
            <div className='space'></div>

            <header className="proj-hero">
                <h1 className="proj-hero-title">Me contacter</h1>
                <p className="proj-hero-sub">Je suis disponible pour échanger sur vos projets, opportunités et collaborations.</p>
            </header>

            <main className="proj-body">
                <section className="md-section">
                    <h2 className="md-h2">Coordonnées</h2>
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
                </section>

                <section className="md-section">
                    <h2 className="md-h2">Disponibilité</h2>
                    <p>Ouvert aux opportunités en CDI/Alternance. Réponse rapide par email ou LinkedIn.</p>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;