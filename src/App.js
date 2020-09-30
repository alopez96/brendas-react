import React, { useState, useEffect } from 'react';
import './App.css';

import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import AboutJump from './components/about-jump/AboutJump';
import AboutRentals from './components/about-rentals/AboutRentals';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Jumpies from './components/jumpies/Jumpies';
import JumpieSlider from './components/jumpies/JumpieSlider';

import LazyLoad from 'react-lazyload';

function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setisMobile] = useState(window.innerWidth < 500);
  const [route, setRoute] = useState('home');

  //state for language selected
  const [isengl, setisEngl] = useState(true);
  useEffect(() => {
    console.log('isEngl', isengl)
  }, [isengl]);

  //variables for nav references
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
      window.scrollTo(0, 0)
      setRoute(value);
  }

  return (
    <div className='app'>
      {route === 'home' ?
      <div>

        <Nav goToRef={goToRef} homeRef={homeRef} isMobile={isMobile} aboutRef={aboutRef}
           contactRef={contactRef} isengl={isengl} setisEngl={setisEngl} />

      <div ref={homeRef}> 
        <Hero isMobile={isMobile} updateRoute={updateRoute} isengl={isengl}/> 
      </div>

      <JumpieSlider/>
      <div className='text-center gray-back'>
        <button className='primary-cta' onClick={() => updateRoute('jumpies')} >View all rentals</button>
      </div>

      <LazyLoad placeholder={<div>Loading...</div>}>
      <div ref={aboutRef}> 
        <AboutJump isMobile={isMobile} updateRoute={updateRoute} isengl={isengl}
            goToRef={goToRef} contactRef={contactRef} /> 
        <AboutRentals isMobile={isMobile} isengl={isengl}
            goToRef={goToRef} contactRef={contactRef} /> 
      </div>
      </LazyLoad>

      <div ref={contactRef}> 
        <Contact isMobile={isMobile} isengl={isengl}/> 
      </div>

      <Footer/>

      </div>
      : <Jumpies updateRoute={updateRoute} isMobile={isMobile}/> }
    </div>
  );
}

export default App;
