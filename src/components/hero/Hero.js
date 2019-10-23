import React from 'react';
import './../../App.css';
import jumpie from './../../svg/jumpie.svg';
import Cta from './Cta';
import Nav from './Nav';

function Hero() {

  const header = 'Host an Event to Remember.';
  const subHeader = 'Rent jumpers, tables, chairs, and tents for the ocasion.';

    return (
      <div className='hero'>
        <Nav/>
        <div className='hero-text'>
          <h2>{header}</h2>
          <p>{subHeader}</p>
          <Cta/>
        </div>
        <img className="hero-jumpie" src={jumpie} alt='jumpie'></img>
      </div>
    );
  
}


export default Hero;