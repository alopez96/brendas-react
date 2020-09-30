import React, {useEffect} from 'react';
import './../../App.css';
import jumpie from './../../svg/jumpie.svg';
import smallJumpie from './../../svg/mobileSizes/jumpie.svg';
import Cta from './Cta';

function Hero({ isMobile, updateRoute, isengl }) {

  if(isengl){
    var header = 'Host an Event to Remember.';
    var subHeader = 'We rent out jumpers, tables, chairs, and tents for all ocasions.';
  }
  else{
    var header = 'Brenda\'s Jumpies';
    var subHeader = 'Rentamos brincolines, mesas, sillas, y carpas para todas ocasiones.';
  }

  if(!isMobile){
      return (
        <div className='hero'>
          <div className='hero-text'>
            <h2>{header}</h2>
            <p>{subHeader}</p>
            <Cta updateRoute={updateRoute} isMobile={isMobile} isengl={isengl}/>
          </div>
          <img src={jumpie} alt='jumpie'></img>
        </div>
      );
  }
  else{
    return(
      <div className='home-background'>
        <p className='home-logo'>Brenda's Jumpies</p>
      <div className='mhero'>
          <img src={smallJumpie} alt='jumpie'></img>
          <div className='mhero-text'>
            <h2>{header}</h2>
            <p>{subHeader}</p>
            <Cta updateRoute={updateRoute} isMobile={isMobile} isengl={isengl}/>
          </div>
        </div>
        </div>
    )
  }
  
}


export default Hero;