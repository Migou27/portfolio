// IDE.jsx
import React from 'react';
import { motion } from 'framer-motion';
import logoVsCode from "../images/logoVsCode.png";
import logoVs from "../images/logoVs.png";

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

const IDE = () => {
  // Données des IDE
  const ideList = [
    {
      id: 1,
      logo: logoVsCode,
      title: 'Visual Studio Code',
      description: 'Visual Studio Code, pour ce qui est des langages de programation en tout genre.'
    },
    {
      id: 2,
      logo: logoVs,
      title: 'Visual Studio',
      description: 'Visual Studio 2022 pour le C#.'
    }
  ];

  return (
    <motion.div
      id = "ide"
      className="ide-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="section-title">Mes IDE</h2>
      
      <div className="technology-grid">
        {ideList.map((ide) => (
          <motion.div 
            key={ide.id}
            className="technology-card"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="ide-header">
              <img 
                src={ide.logo} 
                alt={ide.title} 
                className="ide-logo" 
                title={ide.title}
              />
              <h3 className="ide-title">{ide.title}</h3>
            </div>
            <div className="technology-description">
              {ide.description}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default IDE;