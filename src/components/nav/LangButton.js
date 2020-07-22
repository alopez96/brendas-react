import React, {useState} from 'react';
import './../../App.css';

function LangButton ({ isMobile, isengl, lang, toggleLang, setisNavOpen }) {
    

    const HideNav = (isengl) => {
        setisNavOpen(false)
        toggleLang(isengl)
    }

    if(!isMobile){
        return(
            <button className='lang-btn' onClick={()=>toggleLang(isengl)}>{lang}</button> 
        )}
    else{
        return(
            <li style={mobileLangStyle}  onClick={()=>HideNav(isengl)}>{lang}</li> 
        )
    }
}

const mobileLangStyle = {
    fontSize: '22px',
    fontWeight: '200'
};

export default LangButton;