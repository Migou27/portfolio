import React, { useEffect } from 'react';
import { UAParser } from 'ua-parser-js';

const LogManager = () => {
  useEffect(() => {
    // Fonction pour loguer les informations
    const logPageVisit = async () => {
      const parser = new UAParser();
      const userAgent = parser.getResult()

      const logData = {
        page: window.location.pathname,
        device: userAgent.device.type || 'Inconnu',
        browser: userAgent.browser.name || 'Inconnu',
        timestamp: new Date().toISOString()
      };

      const apiUrl = 'https://script.google.com/macros/s/AKfycbzIrqp9fSb4j8VFH6z717EXvHX-42GswPohC_iQkW68QuxesHOF43eM2L2X8UgAzgvwRg/exec'; 

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(logData),
        });

        if (response.ok) {
          console.log('Log envoyé avec succès!');
        } else {
          console.error('Erreur lors de l\'envoi du log');
        }
      } catch (error) {
        console.error('Erreur réseau', error);
      }
    };

    logPageVisit();
  }, []);

  return null;
};

export default LogManager;
