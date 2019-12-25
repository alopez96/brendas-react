import React from 'react';
import './../../App.css';

function Cta ({ isMobile, updateRoute }) {
  
    const ctatext = 'See rentals';

    const handleCta = () => { updateRoute('list') }

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