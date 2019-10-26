import React, { useState } from 'react';
import './nav.css';
import burger from './../../svg/mobileSizes/burger.svg';

function MobileNav({ goToRef, homeRef, aboutRef, contactRef }) {

    const [isNavOpen, setisNavOpen] = useState(false);

    const toogleNav = (value) => { setisNavOpen(!value) }

    const navigate = (route) => {
        setisNavOpen(false)
        goToRef(route)
    }

    return(
        <div>
            {isNavOpen?
            <div className='fixed'>
                <div className='mobile-nav'>
                    <ul>
                        <li onClick={()=>navigate(homeRef)}>Home</li>
                        <li onClick={()=>navigate(aboutRef)}>About</li>
                        <li onClick={()=>navigate(contactRef)}>Contact</li>
                        <li onClick={()=>toogleNav(isNavOpen)}>x</li>
                    </ul>
                </div>
            </div>    
            : <div className='open-btn' onClick={()=>toogleNav(isNavOpen)}>
                <img src={burger}/>
            </div>
        }
        </div>
    )
}

export default MobileNav; 