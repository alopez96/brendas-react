import React from 'react';
import jumpie from './../../svg/rentals.svg';
import './main.css';

function AboutRentals () {

    const header = 'Need tables, chairs, or tents?';
    const subheader = 'Tell us how many of each, and let us deliver and pickup to your location.';

    const call = () => {
        console.log('call clicked')
    }

    return(
        <div>
            <div className="main">
            <div className='content'>
                    <h3 className='head'>{header}</h3>
                    <p className='subhead'>{subheader}</p>
                    
                    <a className='primary' onClick={() => call()}>Give us a call ></a>
                </div>
                <div>
                    <img className='image' src={jumpie}></img>
                </div>
            </div>
        </div>
    );
}

export default AboutRentals;