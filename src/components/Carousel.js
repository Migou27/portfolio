import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import cerzaAccueil from '../images/AP/cerzaAccueil.png';
import cerzaSearch from '../images/AP/cerzaSearch.JPG';
import cerzaDesc from '../images/AP/cerzaDesc.JPG';
import cerzaSante from '../images/AP/cerzaSante.JPG';
import gsbMenu from '../images/AP/gsbMenu.JPG';
import gsbNewDoc from '../images/AP/gsbNewDoc.JPG';
import gsbMedocCours from '../images/AP/gsbMedocCours.JPG';


const Carousel = () => {

    const nbSlide = window.innerWidth < 1200 ? 2 : 3;

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: nbSlide,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings} className='slider margin-slider'>
                <div>
                    <img className="imageSlider" src={cerzaAccueil}/>
                </div>
                <div>
                    <img className="imageSlider" src={cerzaSearch}/>
                </div>
                <div>
                    <img className="imageSlider" src={cerzaDesc}/>
                </div>
                <div>
                    <img className="imageSlider" src={cerzaSante}/>
                </div>
                <div>
                    <img className="imageSlider" src={gsbMenu}/>
                </div>
                <div>
                    <img className="imageSlider" src={gsbNewDoc}/>
                </div>
                <div>
                    <img className="imageSlider" src={gsbMedocCours}/>
                </div>   
            </Slider> 
        </div>
    );
};

export default Carousel;