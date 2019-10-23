import React from 'react';
import rental from './../../svg/rentals.svg';
import './main.css';
import tent from './../../svg/tablesandtent.svg';

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
                    <a className='primary' onClick={() => call()}>Give us a call ></a>
                </div>
                <div>
                    <img className='image' src={rental}></img>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className='mmain'>
                <img className='mimage' src={tent}/>
                <div className='mcontent'>
                    <h3 className='mhead'>{header}</h3>
                    <p className='msubhead'>{subheader}</p>   
                    <a className='mprimary' onClick={() => call()}>Give us a call ></a> 
                </div>
            </div>
        );
    }

    
}

export default AboutRentals;