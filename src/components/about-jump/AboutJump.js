import React from 'react';
import jumpie from './../jumpies/images/b9.jpeg';

function AboutJump ({ isMobile, updateRoute, isengl, goToRef, contactRef }) {

    if(isengl){
        var header = 'We are here for your party rental needs.';
        var subheader = 'Choose from a variety of jumpies, including slides, Water slides, castles with Spiderman, Hulk, Frozen, and more.';
        var primary = 'See rentals';
        var secondary = 'Contact us >';
    }
    else{
        var header = 'Dales un dia que no olvidarian.';
        var subheader = 'Tenemos muchas opciones de brincolines, incluyendo Spongebob, Spiderman, Hulk, Frozen, y mas.';
        var primary = 'Ver brincolines';
        var secondary = 'Contactar >';
    }

    const seeJumpies = () => {
        window.scrollTo(0, 0)
        updateRoute('list');
    }

    const call = () => {
        goToRef(contactRef)
    }

    return(
        <div className='section flex'>
            <img className='slider-image' src={jumpie} alt='jumpie'/>
            <div className='text-section'>
                <h3 className='header'>{header}</h3>
                <p className='subheader'>{subheader}</p>    
                <button className='primary-cta' onClick={() => seeJumpies()}>{primary}</button>
            </div>  
        </div>
    );
}

export default AboutJump;