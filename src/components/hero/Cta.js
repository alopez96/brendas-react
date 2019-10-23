import React from 'react';
import './../../App.css';

function Cta (props) {
  
    const ctatext = 'See rentals';
    
    const isMobile = props.isMobile;

    const handleCta = () => {
        console.log('cta')
    }

    if(!isMobile){
        return (
            <button onClick={() => handleCta()} className='cta-btn'>{ctatext}</button>
        );
    }
    else{
        return(
            <button onClick={() => handleCta()} className='mcta-btn'>{ctatext}</button>
        )
    }
}

export default Cta;