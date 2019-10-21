import React from 'react';
import './App.css';

import Hero from './components/hero/Hero';
import AboutJump from './components/about-jump/AboutJump';
import AboutRentals from './components/about-rentals/AboutRentals';

function App() {
  return (
    <div className='app'>
      <AboutRentals/>
    </div>
  );
}

export default App;
