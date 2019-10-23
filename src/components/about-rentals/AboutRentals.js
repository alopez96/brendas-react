import React from 'react';
import rental from './../../svg/rentals.svg';
import './rentals.css';
import tent from './../../svg/mobileSizes/rentals.svg';

function AboutRentals (props) {

    const header = 'Need tables, chairs, or tents?';
    const subheader = 'Tell us how many of each, and let us deliver and pickup to your location.';

    const call = () => {
        window.open('tel: 707-921-6530')
    }

    const isMobile = props.isMobile

    if(!isMobile){
        return(
            <div className='main'>
                <div className='content'>
                    <h3 className='head'>{header}</h3>
                    <p className='subhead'>{subheader}</p>    
                    <button className='primary' onClick={() => call()}>Give us a call ></button>
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
                    <button className='mprimary' onClick={() => call()}>Give us a call ></button>
                </div>
            </div>
        );
    }

    
}

export default AboutRentals;