import React, { useState, useEffect } from 'react';
import './App.css';

import Nav from './components/hero/Nav';
import Hero from './components/hero/Hero';
import AboutJump from './components/about-jump/AboutJump';
import AboutRentals from './components/about-rentals/AboutRentals';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setisMobile] = useState(window.innerWidth < 500);

  let homeRef = React.createRef();
  let aboutRef = React.createRef();
  let contactRef = React.createRef();

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

  const goToRef = (ref) =>{
    window.scrollTo(0, ref.current.offsetTop)
  }

  return (
    <div className='app'>
      {/* <Nav goToRef={goToRef} homeRef={homeRef}
          aboutRef={aboutRef} contactRef={contactRef} />
      <div ref={homeRef}> <Hero isMobile={isMobile}/> </div>
      <div ref={aboutRef}> 
        <AboutJump isMobile={isMobile}/> 
        <AboutRentals isMobile={isMobile}/> 
      </div> */}
      <div ref={contactRef}> <Contact isMobile={isMobile}/> </div>
      <Footer/>
    </div>
  );
}

export default App;
