import React from 'react';
import jumpie from './../../svg/jumpieblue.svg';
import jumpieMobile from './../../svg/mobileSizes/jumpieBlue.svg';
import './about.css';

function AboutJump (props) {

    const header = 'Give them the party of their life.';
    const subheader = 'Choose from a variety of jumpies, including Spongebob, Spiderman, Hulk, Frozen, and more.';

    const seeJumpies = () => {
        console.log('see jumpies clicked')
    }

    const call = () => {
        window.open('tel: 707-921-6530')
    }

    const isMobile = props.isMobile;
    console.log('ismobile', isMobile)

    if(!isMobile){
        return(
            <div>
                <div className="main">
                    <div>
                        <img className='image' src={jumpie} alt='jumpie'/>
                    </div>
                    <div className='content'>
                        <h3 className='head'>{header}</h3>
                        <p className='subhead'>{subheader}</p>
                        <div className='buttons'>
                            <button className='primary' onClick={() => seeJumpies()}>See jumpies</button>
                            <button className='secondary' onClick={() => call()}>Give us a call ></button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
    else{
        return(
            <div className='mmain'>
                <img className='mimage' src={jumpieMobile} alt='jumpie'/>
                <div className='mcontent'>
                    <h3 className='mhead'>{header}</h3>
                    <p className='msubhead'>{subheader}</p>   
                    <button className='mprimary' onClick={() => seeJumpies()}>See jumpies ></button>
                    <button className='msecondary' onClick={() => call()}>Give us a call ></button> 
                </div>
            </div>
        )
    }
}

export default AboutJump;