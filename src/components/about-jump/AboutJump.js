import React from 'react';
import jumpie from './../../svg/jumpieblue.svg';
import jumpieMobile from './../../svg/mobileSizes/jumpieBlue.svg';
import './about.css';

function AboutJump ({ isMobile, updateRoute, isengl }) {

    if(isengl){
        var header = 'Give them the party of their life.';
        var subheader = 'Choose from a variety of jumpies, including Spongebob, Spiderman, Hulk, Frozen, and more.';
        var primary = 'See jumpies >';
        var secondary = 'Give us a call >';
    }
    else{
        var header = 'Dales un dia que no olvidaran.';
        var subheader = 'Tenemos de muchas variadades, incluyendo Spongebob, Spiderman, Hulk, Frozen, y mas.';
        var primary = 'Ver brincolines >';
        var secondary = 'Llamenos>';
    }

    const seeJumpies = () => {
        updateRoute('list');
    }

    const call = () => {
        window.open('tel: 707-921-6530')
    }


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
                            <button className='primary' onClick={() => seeJumpies()}>{primary}</button>
                            <button className='secondary' onClick={() => call()}>{secondary}</button>
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
                    <button className='mprimary' onClick={() => seeJumpies()}>{primary}</button>
                    <button className='msecondary' onClick={() => call()}>{secondary}</button> 
                </div>
            </div>
        )
    }
}

export default AboutJump;