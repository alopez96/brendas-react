import React, { useState, useEffect } from 'react';
import jumpie from './../../svg/rentals.svg';
import './main.css';

function AboutRentals () {

    const [width, setWidth] = useState(0);
    const [isMobile, setisMobile] = useState(false);

    //like component did mount
    useEffect(() => {
        window.addEventListener('resize', () => { updateWidth() });

        //returned function will be called on component unmount 
        return () => {
            window.removeEventListener('resize', () => { })
        }
    }, []);

    //handle change in width
    useEffect(() => {
        handleWidthChange();
    }, [width, isMobile]);

    const header = 'Need tables, chairs, or tents?';
    const subheader = 'Tell us how many of each, and let us deliver and pickup to your location.';

    const call = () => {
        console.log('call clicked')
    }

    const updateWidth = () => {        
        setWidth(window.innerWidth)
    }

    //method to update isMobile bool
    const handleWidthChange = () => {
        console.log('width', width)
        console.log('isMobile', width < 500)        
        setisMobile( width < 500 )
    }

    if(isMobile){
        return(
            <div>
                <div className='main'>
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
    else{
        return(
            <div>
                hello
            </div>
        );
    }

    
}

export default AboutRentals;