import React from 'react';
import './../../App.css';
import jumpie from './../../svg/jumpie.svg';
import smallJumpie from './../../svg/mobileSizes/jumpie.svg';
import Cta from './Cta';
import Nav from './Nav';

function Hero(props) {

  const header = 'Host an Event to Remember.';
  const subHeader = 'We rent jumpers, tables, chairs, and tents for the ocasion.';

  const isMobile = props.isMobile;

  if(!isMobile){
      return (
        <div className='hero'>
          <div className='hero-text'>
            <h2>{header}</h2>
            <p>{subHeader}</p>
            <Cta/>
          </div>
          <img src={jumpie} alt='jumpie'></img>
        </div>
      );
  }
  else{
    return(
      <div className='mhero'>
          <img src={smallJumpie} alt='jumpie'></img>
          <div className='mhero-text'>
            <h2>{header}</h2>
            <p>{subHeader}</p>
            <Cta isMobile={isMobile}/>
          </div>
        </div>
    )
  }
  
}


export default Hero;