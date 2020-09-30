import React from 'react';
import rental from './../../svg/rentals.svg';
import tent from './../../svg/mobileSizes/rentals.svg';
import tent2 from './../jumpies/images/tent.jpg';

function AboutRentals ({ isMobile, isengl, goToRef, contactRef }) {

    if(isengl){
        var header = 'Rent tents, tables, and chairs.';
        var subheader = 'We have what you need to seat a large group, and we can deliver to parks or homes.';
        var secondary = 'Contact us';
    }
    else{
        var header = 'Necesita mesas, sillas, o carpa?';
        var subheader = 'Usted nos dice cuantas y nosotros se las llevamos.';
        var secondary = 'Contactar';
    }
    
    const call = () => {
        goToRef(contactRef)
    }

    return(
        <div className='flex section reverse'>
            <div className='flex-container text-section'>
                <h3 className='header'>{header}</h3>
                <p className='subheader'>{subheader}</p>    
                <button className='primary-cta' onClick={() => call()}>{secondary}</button>
            </div>
            <div className='flex-container'>
                <img className='image' src={tent2} alt='tent'/>
            </div>
        </div>
    );   
}

export default AboutRentals;