import React, { useState, useEffect } from 'react';
import './App.css';

import Hero from './components/hero/Hero';
import AboutJump from './components/about-jump/AboutJump';
import AboutRentals from './components/about-rentals/AboutRentals';
import Contact from './components/contact/Contact';

function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setisMobile] = useState(window.innerWidth < 500);

  //like component did mount
  useEffect(() => {
    window.addEventListener('resize', () => { updateWidth() });

    //returned function will be called on component unmount 
    return () => {
        window.removeEventListener('resize', () => {updateWidth() })
    }
  }, []);

  //handle change in width
  useEffect(() => {
    handleWidthChange();
  }, [width]);


  
  const updateWidth = () => {        
    setWidth(window.innerWidth)
  }

  //method to update isMobile bool
  const handleWidthChange = () => {
    setisMobile( width < 500 )
  }

  return (
    <div className='app'>
      <Hero isMobile={isMobile}/>
      <div className='padding'></div>
      <AboutJump/>
    </div>
  );
}

export default App;
