// Techno.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Importation des logos
import logoHtml5 from '../images/logoHtml5.png';
import logoCss3 from '../images/logoCss3.png';
import logoPhp from '../images/logoPhp.png';
import logoAngular from '../images/logoAngular.png';
import logoReact from '../images/logoReact.png';
import logoMySQL from '../images/logoMySQL.png';
import logoPhpMyAdmin from '../images/logoPhpMyAdmin.png';
import logoSqlServer from '../images/logoSqlServer.png';
import logoCsharp from '../images/logoCsharp.png';
import logoGitKraken from '../images/logoGitKraken.png';
import logoVBA from '../images/logoVBA.png';
import logoSQLite from '../images/logoSQLite.png';
import logoNode from '../images/logoNode.png';
import logoReactNative from '../images/logoReactNative.png';
import logoPostman from '../images/logoPostman.png';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2 
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Techno = () => {
  const webTechnologies = [
    {
      id: 1,
      logos: [logoHtml5, logoCss3],
      titles: ['HTML 5', 'CSS 3'],
      description: 'HTML et CSS pour la conception de sites web.'
    },
    {
      id: 2,
      logos: [logoPhp],
      titles: ['PHP 8'],
      description: 'PHP pour la création de sites web dynamiques, notamment via un serveur.'
    },
    {
      id: 3,
      logos: [logoAngular],
      titles: ['Angular'],
      description: 'Angular, framework open-source basé sur le typeScript pour réaliser des sites web complexes.'
    },
    {
      id: 4,
      logos: [logoReact],
      titles: ['ReactJs'],
      description: 'ReactJs, framework open-source, basé sur le javascript, servant à créer des sites avec une interface utilisateur.'
    }
  ];

  const mobileTechnologies = [
    {
      id: 1,
      logos: [logoReactNative],
      titles: ['React Native'],
      description: "React Native, framework d'applications mobiles (iOS, Android et UWP) permettant l'utilisation de React avec les fonctionnalité natives des appareils."
    }
  ];

  // Autres technologies
  const otherTechnologies = [
    {
      id: 1,
      logos: [logoMySQL, logoPhpMyAdmin, logoSqlServer, logoSQLite],
      titles: ['MySQL', 'PhpMyAdmin', 'Microsoft SQL Server', 'SQLite'],
      description: 'Technologies de bases de données et leurs outils de gestion.'
    },
    {
      id: 2,
      logos: [logoCsharp],
      titles: ['C#'],
      description: 'Le C# notamment utilisé pour des logiciels en client lourd.'
    },
    {
      id: 3,
      logos: [logoNode],
      titles: ['NodeJs'],
      description: "NodeJs notamment pour les serveurs d'API."
    },
    {
      id: 4,
      logos: [logoPostman],
      titles: ['Postman'],
      description: 'Postman pour tester les API avec autre chose que des requêtes GET.'
    },
    {
      id: 5,
      logos: [logoGitKraken],
      titles: ['GitKraken'],
      description: 'La technologie Git, notamment GitKraken qui lui sert d\'interface graphique.'
    },
    {
      id: 6,
      logos: [logoVBA],
      titles: ['Microsoft Virtual Basic for Applications'],
      description: 'Le VBA pour ajouter du code et des macros derrière les outils de la licence Office.'
    }    
  ];

  return (
    <div className="techno-container">
      <motion.section
        id = "web"
        className="technologies-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="section-title">Mes technos Web</h2>
        
        <div className="technology-grid">
          {webTechnologies.map((tech) => (
            <motion.div 
              key={tech.id}
              className="technology-card"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="technology-icons">
                {tech.logos.map((logo, index) => (
                  <img 
                    key={index}
                    src={logo} 
                    alt={tech.titles[index]} 
                    className="technology-logo" 
                    title={tech.titles[index]}
                  />
                ))}
              </div>
              <div className="technology-description">
                {tech.description}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id = "mobile"
        className="technologies-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="section-title">Mes technos mobiles</h2>
        
        <div className="technology-grid">
          {mobileTechnologies.map((tech) => (
            <motion.div 
              key={tech.id}
              className="technology-card"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="technology-icons">
                {tech.logos.map((logo, index) => (
                  <img 
                    key={index}
                    src={logo} 
                    alt={tech.titles[index]} 
                    className="technology-logo" 
                    title={tech.titles[index]}
                  />
                ))}
              </div>
              <div className="technology-description">
                {tech.description}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id = "autre"
        className="technologies-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="section-title">Autres technos et logiciels utilisés</h2>
        
        <div className="technology-grid">
          {otherTechnologies.map((tech) => (
            <motion.div 
              key={tech.id}
              className="technology-card"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="technology-icons">
                {tech.logos.map((logo, index) => (
                  <img 
                    key={index}
                    src={logo} 
                    alt={tech.titles[index]} 
                    className="technology-logo" 
                    title={tech.titles[index]}
                  />
                ))}
              </div>
              <div className="technology-description">
                {tech.description}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Techno;