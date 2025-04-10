// Carousel.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import cerzaAccueil from '../images/AP/cerzaAccueil.png';
import cerzaSearch from '../images/AP/cerzaSearch.JPG';
import cerzaDesc from '../images/AP/cerzaDesc.JPG';
import cerzaSante from '../images/AP/cerzaSante.JPG';
import gsbMenu from '../images/AP/gsbMenu.JPG';
import gsbNewDoc from '../images/AP/gsbNewDoc.JPG';
import gsbMedocCours from '../images/AP/gsbMedocCours.JPG';

const MultiImageCarousel = ({ 
    images = [
        cerzaAccueil,
        cerzaSearch,
        cerzaDesc,
        cerzaSante,
        gsbMenu,
        gsbNewDoc,
        gsbMedocCours,
    ] 
  }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
    // Calcul du nombre d'images à afficher en fonction de la largeur d'écran
    const [imagesPerSlide, setImagesPerSlide] = useState(3);
  
    // Mise à jour du nombre d'images par slide lors du redimensionnement
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 640) {
          setImagesPerSlide(1);
        } else if (window.innerWidth < 1024) {
          setImagesPerSlide(2);
        } else {
          setImagesPerSlide(3);
        }
      };
  
      // Définir le nombre initial d'images par slide
      handleResize();
  
      // Ajouter l'écouteur d'événement
      window.addEventListener('resize', handleResize);
  
      // Nettoyer l'écouteur d'événement
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    // Calcul du nombre maximal d'indices
    const maxIndex = Math.max(0, images.length - imagesPerSlide);
  
    // Gestion du défilement automatique
    useEffect(() => {
      let interval;
      if (isAutoPlaying) {
        interval = setInterval(() => {
          setCurrentIndex(prevIndex => 
            prevIndex >= maxIndex ? 0 : prevIndex + 1
          );
        }, 5000);
      }
      return () => clearInterval(interval);
    }, [isAutoPlaying, maxIndex]);
  
    // Gestion des flèches du carrousel
    const goToPrevious = () => {
      setIsAutoPlaying(false);
      setCurrentIndex(prevIndex => 
        prevIndex === 0 ? maxIndex : prevIndex - 1
      );
    };
  
    const goToNext = () => {
      setIsAutoPlaying(false);
      setCurrentIndex(prevIndex => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    };
  
    // Obtenir les images visibles actuellement
    const getVisibleImages = () => {
      return images.slice(currentIndex, currentIndex + imagesPerSlide);
    };
  
    return (
      <div className="carousel-container">
        <div className="carousel-navigation">
          <button 
            className="carousel-button prev" 
            onClick={goToPrevious}
            disabled={currentIndex === 0 && !isAutoPlaying}
          >
            <FaArrowLeft />
          </button>
          
          <button 
            className="carousel-button next" 
            onClick={goToNext}
            disabled={currentIndex >= maxIndex && !isAutoPlaying}
          >
            <FaArrowRight />
          </button>
        </div>
        
        <div className="multi-carousel-wrapper">
          <motion.div 
            className="multi-carousel-track"
            initial={false}
            animate={{ x: `calc(-${currentIndex * 100 / imagesPerSlide}%)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {images.map((image, index) => (
              <div 
                key={index} 
                className="carousel-slide"
                style={{ 
                  width: `calc(100% / ${imagesPerSlide})`,
                }}
              >
                <div className="carousel-image-container">
                  <img 
                    src={image} 
                    alt={`Slide ${index + 1}`} 
                    className="carousel-image"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="carousel-indicators">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${currentIndex === index ? 'active' : ''}`}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default MultiImageCarousel;