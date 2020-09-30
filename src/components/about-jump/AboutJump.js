import React from 'react';
// import jumpie from './../../svg/jumpieblue.svg';
import jumpieMobile from './../../svg/mobileSizes/jumpieBlue.svg';
import './about.css';
import jumpie from './../jumpies/images/b9.jpeg';

function AboutJump ({ isMobile, updateRoute, isengl, goToRef, contactRef }) {

    if(isengl){
        var header = 'Give them the birthday party they will remember.';
        var subheader = 'Choose from a variety of jumpies, including Slides, Water Slides, and Castles with Spiderman, Hulk, Frozen, and more.';
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
        <div className='flex'>
            <div className='flex-container'>
                <img className='image' src={jumpie} alt='jumpie'/>
            </div>
            <div className='flex-container text-section'>
                <h3 className='header'>{header}</h3>
                <p className='subheader'>{subheader}</p>    
                <button className='primary-cta' onClick={() => seeJumpies()}>{primary}</button>
            </div>  
        </div>
    );
}

export default AboutJump;