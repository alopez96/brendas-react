import React from 'react';
import jumpie from './../../svg/jumpieblue.svg';
import './main.css';

function AboutJump () {

    const header = 'Give them the party of their life.';
    const subheader = 'Choose from a variety of jumpies, including Spongebob, Spiderman, Hulk, Frozen, and more.';

    const seeJumpies = () => {
        console.log('see jumpies clicked')
    }

    const call = () => {
        console.log('call clicked')
    }

    return(
        <div>
            <div className="main">
                <div>
                    <img className='image' src={jumpie}></img>
                </div>
                <div className='content'>
                    <h3 className='head'>{header}</h3>
                    <p className='subhead'>{subheader}</p>
                    <div className='buttons'>
                        <a className='primary' onClick={() => seeJumpies()}>See jumpies ></a>
                        <a className='secondary' onClick={() => call()}>Give us a call ></a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutJump;