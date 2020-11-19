import React, { useState } from 'react';
import './../nav/nav.css';
import burgerGray from './../../svg/mobileSizes/burger_gray.svg';
import LangButton from './LangButton';

function MobileNav({ goToRef, homeRef, aboutRef, contactRef, isengl, setisEngl, lang, toggleLang }) {

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
                        <li onClick={()=>navigate(contactRef)}>Contact</li>
                        <LangButton isMobile={true} isengl={isengl} setisEngl={setisEngl} 
                                lang={lang} toggleLang={toggleLang} setisNavOpen={setisNavOpen} />
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