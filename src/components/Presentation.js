// Presentation.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaGamepad, FaUtensils, FaBook, } from 'react-icons/fa';
import { MdSportsTennis } from 'react-icons/md';
import Carousel from './Carousel';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.3 
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Presentation = () => {
  return (
    <div className="presentation-container">
      <header className="header">
        <motion.h1 
          className="intro-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Je m'appelle Miguel FENEROL, bienvenue sur mon portfolio.
        </motion.h1>
      </header>

      {/* <section className="carousel-section">
        <Carousel />
      </section> */}

      <motion.section 
        className="content-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="about-card" variants={itemVariants}>
          <div className="card-header">
            <h2>À propos de moi</h2>
          </div>
          <div className="card-content">
            <p>
              Je suis passionné de jeux vidéos et de développement. J'aime également le badminton, 
              la cuisine et les mangas. Je suis une personne curieuse, qui sait travailler en équipe 
              et de manière organisée.
            </p>
            <div className="interests">
              <div className="interest-item">
                <FaLaptopCode />
                <span>Développement</span>
              </div>
              <div className="interest-item">
                <FaGamepad />
                <span>Jeux vidéo</span>
              </div>
              <div className="interest-item">
                <MdSportsTennis />
                <span>Badminton</span>
              </div>
              <div className="interest-item">
                <FaUtensils />
                <span>Cuisine</span>
              </div>
              <div className="interest-item">
                <FaBook />
                <span>Mangas</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="career-card" variants={itemVariants}>
          <div className="card-header">
            <h2>Mon projet professionnel</h2>
          </div>
          <div className="card-content">
            <p>
              Devenir développeur de logiciel ou d'application web en allant jusqu'au bac+5. 
              Pour cela je suis une formation bachelor puis master chez Paris Ynov Campus.
            </p>
          </div>
        </motion.div>

        <motion.div className="education-card" variants={itemVariants}>
          <div className="card-header">
            <h2>Mon parcours</h2>
          </div>
          <div className="card-content">
            <ul className="timeline">
            <li className="timeline-item">
                <div className="timeline-icon">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content">
                  <h3>Bachelor 3</h3>
                  <p>Bachelor 3 en informatique à <a href="https://www.ynov.com/campus/paris" target="_blank">Paris Ynov Campus</a>, Nanterre (92)</p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-icon">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content">
                  <h3>BTS SIO</h3>
                  <p>Services informatiques aux organisations obtenu à l'<a href="https://www.stadjutor.com/" target="_blank" rel="noopener noreferrer">établissement Saint Adjutor</a> de Vernon (27)</p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-icon">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content">
                  <h3>Licence IEEEA (non finie)</h3>
                  <p>1ère année à l'université de Rouen (76)</p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-icon">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content">
                  <h3>Baccalauréat scientifique</h3>
                  <p>Spécialité Physique-Chimie en 2018 au <a href="https://malraux.lycee.ac-normandie.fr/" target="_blank" rel="noopener noreferrer">Lycée André Malraux</a> de Gaillon (27)</p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-icon">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content">
                  <h3>Brevet des collèges</h3>
                  <p>En 2015 au collège Léonard de Vinci de Saint Marcel (27)</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Presentation;