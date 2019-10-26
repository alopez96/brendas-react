import React, { useState } from 'react';
import './nav.css';

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
            <div>
                <div onClick={()=>toogleNav(isNavOpen)}>x</div>
                <div className='mobile-nav'>
                    <ul>
                        <li onClick={()=>navigate(homeRef)}>Home</li>
                        <li onClick={()=>navigate(aboutRef)}>About</li>
                        <li onClick={()=>navigate(contactRef)}>Contact</li>
                    </ul>
                </div>
            </div>    
            : <div onClick={()=>toogleNav(isNavOpen)}>x</div>
        }
        </div>
    )
}

export default MobileNav; 