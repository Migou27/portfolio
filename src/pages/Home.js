import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/Style.css";
import "../styles/Home.css";
import IDE from '../components/IDE';
import Presentation from '../components/Presentation';
import Techno from '../components/Techno';


const Home = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <br/>
                  <div className='space'></div>
                  <Presentation></Presentation>
                  <IDE></IDE>
                  <Techno></Techno>
            </div>
      );
};

export default Home;