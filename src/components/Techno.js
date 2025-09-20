// Techno.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Importation des logos
import logoHtml5 from '../images/logos/logoHtml5.png';
import logoCss3 from '../images/logos/logoCss3.png';
import logoPhp from '../images/logos/logoPhp.png';
import logoAngular from '../images/logos/logoAngular.png';
import logoReact from '../images/logos/logoReact.png';
import logoMySQL from '../images/logos/logoMySQL.png';
import logoPhpMyAdmin from '../images/logos/logoPhpMyAdmin.png';
import logoSqlServer from '../images/logos/logoSqlServer.png';
import logoCsharp from '../images/logos/logoCsharp.png';
import logoGitKraken from '../images/logos/logoGitKraken.png';
import logoVBA from '../images/logos/logoVBA.png';
import logoSQLite from '../images/logos/logoSQLite.png';
import logoNode from '../images/logos/logoNode.png';
import logoReactNative from '../images/logos/logoReactNative.png';
import logoPostman from '../images/logos/logoPostman.png';
import logoKotlin from '../images/logos/logoKotlin.png';
import logoSupabase from '../images/logos/logoSupabase.png';
import logoPostgresql from '../images/logos/logoPostgresql.png';
import logoMongoDB from '../images/logos/logoMongoDB.png';


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
    },
    {
      id: 1,
      logos: [logoKotlin],
      titles: ['Kotlin'],
      description: "Kotlin est un langage de programmation orienté objet et fonctionnel, avec un typage statique qui permet de compiler pour la machine virtuelle Java, JavaScript, et vers plusieurs plateformes en natif."
    }
  ];

  // Autres technologies
  const otherTechnologies = [
    {
      id: 1,
      logos: [logoMySQL, logoPhpMyAdmin, logoSqlServer, logoPostgresql],
      titles: ['MySQL', 'PhpMyAdmin', 'Microsoft SQL Server', 'PostgreSQL'],
      description: 'Technologies de bases de données SQL et leurs outils de gestion.'
    },
    {
      id: 2,
      logos: [logoMongoDB],
      titles: ['Mongo DB'],
      description: 'Base de données NoSQL qui fonctionne avec des documents JSON, gérée avec MongoDB compass.'
    },
    {
      id: 3,
      logos: [logoCsharp],
      titles: ['C#'],
      description: 'Le C# notamment utilisé pour des logiciels en client lourd.'
    },
    {
      id: 4,
      logos: [logoNode],
      titles: ['NodeJs'],
      description: "NodeJs notamment pour les serveurs d'API."
    },
    {
      id: 5,
      logos: [logoPostman],
      titles: ['Postman'],
      description: 'Postman pour tester les API avec autre chose que des requêtes GET.'
    },
    {
      id: 6,
      logos: [logoGitKraken],
      titles: ['GitKraken'],
      description: 'La technologie Git, notamment GitKraken qui lui sert d\'interface graphique.'
    },
    {
      id: 7,
      logos: [logoVBA],
      titles: ['Microsoft Virtual Basic for Applications'],
      description: 'Le VBA pour ajouter du code et des macros derrière les outils de la licence Office.'
    },
    {
      id: 8,
      logos: [logoVBA],
      titles: ['Microsoft Virtual Basic for Applications'],
      description: 'Le VBA pour ajouter du code et des macros derrière les outils de la licence Office.'
    },
    {
      id: 9,
      logos: [logoSupabase],
      titles: ['Supabase'],
      description: "Une plateforme open source qui offre aux développeurs une multitude d'outils pour créer des applications modernes et performantes (Notamment base hébergée)."
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