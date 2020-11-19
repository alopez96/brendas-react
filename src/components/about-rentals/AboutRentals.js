import React from 'react';
import rental from './../../svg/rentals.svg';
import tent from './../../svg/mobileSizes/rentals.svg';
import tent2 from './../jumpies/images/tent.jpg';

function AboutRentals ({ isMobile, isengl, goToRef, contactRef }) {

    if(isengl){
        var header = 'Need a tent and tables to host your guests?';
        var subheader = 'We rent tents, chairs and tables so that you can seat a large group.';
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
            <div className='text-section'>
                <h3 className='header'>{header}</h3>
                <p className='subheader'>{subheader}</p>    
                <button className='primary-cta' onClick={() => call()}>{secondary}</button>
            </div>
            <img className='image' src={tent2} alt='tent'/>
        </div>
    );   
}

export default AboutRentals;