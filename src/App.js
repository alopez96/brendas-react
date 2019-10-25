import React, { useState, useEffect } from 'react';
import './App.css';

import Nav from './components/hero/Nav';
import Hero from './components/hero/Hero';
import AboutJump from './components/about-jump/AboutJump';
import AboutRentals from './components/about-rentals/AboutRentals';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Jumpies from './components/jumpies/Jumpies';

function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setisMobile] = useState(window.innerWidth < 500);
  const [route, setRoute] = useState('home');

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
    if(ref.current)
      window.scrollTo(0, ref.current.offsetTop)
  }

  const updateRoute = (value) => {
    console.log('route', value)
      setRoute(value);  
  }

  return (
    <div className='app'>
      {route === 'home' ?
      <div>

        <Nav goToRef={goToRef} homeRef={homeRef}
          aboutRef={aboutRef} contactRef={contactRef} />

      <div ref={homeRef}> 
        <Hero isMobile={isMobile} updateRoute={updateRoute}/> 
      </div>

      <div ref={aboutRef}> 
        <AboutJump isMobile={isMobile} updateRoute={updateRoute}/> 
        <AboutRentals isMobile={isMobile}/> 
      </div>

      <div ref={contactRef}> 
        <Contact isMobile={isMobile}/> 
      </div>

      <Footer/>

      </div>

      : <Jumpies updateRoute={updateRoute}/> }
    </div>
  );
}

export default App;
