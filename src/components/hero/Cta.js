import React from 'react';
import './../../App.css';

function Cta (props) {
  
    const ctatext = 'See rentals';
    

    const isMobile = props.isMobile;

    if(!isMobile){
        return (
            <button className='cta-btn'>{ctatext}</button>
        );
    }
    else{
        return(
            <button className='mcta-btn'>{ctatext}</button>
        )
    }
}

export default Cta;