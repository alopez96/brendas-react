import React from 'react';
import rental from './../../svg/rentals.svg';
import './rentals.css';
import tent from './../../svg/mobileSizes/rentals.svg';

function AboutRentals ({ isMobile, isengl, goToRef, contactRef }) {

    if(isengl){
        var header = 'Need tables, chairs, or tents?';
        var subheader = 'We have tables, chairs and tents for your party and we can deliver to parks or homes.';
        var secondary = 'Contact us >';
    }
    else{
        var header = 'Necesita mesas, sillas, o carpa?';
        var subheader = 'Usted nos dice cuantas y nosotros se las llevamos.';
        var secondary = 'Contactar >';
    }
    
    const call = () => {
        goToRef(contactRef)
    }

    if(!isMobile){
        return(
            <div className='main'>
                <div className='content'>
                    <h3 className='head'>{header}</h3>
                    <p className='subhead'>{subheader}</p>    
                    <a className='primary' onClick={() => call()}>{secondary}</a>
                </div>
                <div>
                    <img className='image' src={rental} alt='tent'/>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className='mmain'>
                <img className='mimage' src={tent} alt='tent'/>
                <div className='mcontent'>
                    <h3 className='mhead'>{header}</h3>
                    <p className='msubhead'>{subheader}</p>   
                    <a className='mprimary' onClick={() => call()}>{secondary}</a>
                </div>
            </div>
        );
    }

    
}

export default AboutRentals;