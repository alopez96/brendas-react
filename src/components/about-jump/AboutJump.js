import React from 'react';
import jumpie from './../../svg/jumpieblue.svg';

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
                    <img src={jumpie}></img>
                </div>
                <div>
                    <h3>{header}</h3>
                    <p>{subheader}</p>
                    <div>
                        <a onClick={() => seeJumpies()}>See junmpies ></a>
                        <a onClick={() => call()}>Give us a call ></a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutJump;