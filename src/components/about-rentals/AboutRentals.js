import React from 'react';
import rental from './../../svg/rentals.svg';
import './rentals.css';
import tent from './../../svg/mobileSizes/rentals.svg';

function AboutRentals ({isMobile, isengl}) {

    if(isengl){
        var header = 'Need tables, chairs, or tents?';
        var subheader = 'Tell us how many of each, and let us deliver and pickup to your location.';
        var secondary = 'Give us a call >';
    }
    else{
        var header = 'Necesita mesas, sillas, o carpa?';
        var subheader = 'Usted nos dice cuantas y nosotros se las llevamos.';
        var secondary = 'Llamenos>';
    }
    
    const call = () => {
        window.open('tel: 707-921-6530')
    }

    if(!isMobile){
        return(
            <div className='main'>
                <div className='content'>
                    <h3 className='head'>{header}</h3>
                    <p className='subhead'>{subheader}</p>    
                    <button className='primary' onClick={() => call()}>{secondary}</button>
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
                    <button className='mprimary' onClick={() => call()}>{secondary}</button>
                </div>
            </div>
        );
    }

    
}

export default AboutRentals;