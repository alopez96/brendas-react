import React from 'react';
import './../App.css';
import Cta from './Cta';

function Hero() {

  const header = 'Host an Event to Remember.';
  const subHeader = 'Rent jumpers, tables, chairs, and tents for the ocasion.';

    return (
      <div className='hero'>
        <div className='hero-text'>
          <h2>{header}</h2>
          <p>{subHeader}</p>
          <Cta/>
        </div>
      </div>
    );
  
}


export default Hero;