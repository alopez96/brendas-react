import React from 'react';
import './../../App.css';

function Cta ({ isMobile, updateRoute, isengl }) {
  
    if(isengl)
        var ctatext = 'See rentals';
    else
        var ctatext = 'Ver brincolines';

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