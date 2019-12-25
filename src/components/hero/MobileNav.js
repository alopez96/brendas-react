import React, { useState } from 'react';
import './nav.css';
import burgerGray from './../../svg/mobileSizes/burger_gray.svg';
import LangButton from './LangButton';

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
                        <LangButton isMobile={true}/>
                        <li onClick={()=>toogleNav(isNavOpen)}>x</li>
                    </ul>
                </div>
            </div>    
            : <div className='open-btn' onClick={()=>toogleNav(isNavOpen)}>
                <img src={burgerGray}/>
            </div>
        }
        </div>
    )
}

export default MobileNav; 