import React from 'react';
import jumpie from './../../svg/jumpieblue.svg';
import jumpieMobile from './../../svg/mobileSizes/jumpieBlue.svg';
import './about.css';

function AboutJump ({ isMobile, updateRoute, isengl, goToRef, contactRef }) {

    if(isengl){
        var header = 'Give them a birthday party they will remember.';
        var subheader = 'Choose from a variety of jumpies, including Slides, Water Slides, and castles with Spiderman, Hulk, Frozen, and more.';
        var primary = 'See jumpies >';
        var secondary = 'Contact us >';
    }
    else{
        var header = 'Dales un dia que no olvidarian.';
        var subheader = 'Tenemos muchas opciones de brincolines, incluyendo Spongebob, Spiderman, Hulk, Frozen, y mas.';
        var primary = 'Ver brincolines >';
        var secondary = 'Contactar >';
    }

    const seeJumpies = () => {
        window.scrollTo(0, 0)
        updateRoute('list');
    }

    const call = () => {
        goToRef(contactRef)
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
                            <a className='primary' onClick={() => seeJumpies()}>{primary}</a>
                            <a className='secondary' onClick={() => call()}>{secondary}</a>
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
                    <div className='mbuttons'>
                        <a className='mprimary' onClick={() => seeJumpies()}>{primary}</a>
                        <a className='msecondary' onClick={() => call()}>{secondary}</a> 
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutJump;