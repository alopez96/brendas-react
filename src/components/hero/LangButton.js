import React, {useState} from 'react';
import './../../App.css';

function LangButton ({ isMobile, isengl, setisEngl }) {

    const [lang, setLang] = useState('Espanol');

    const toggleLang = (isengl) => {
        if(isengl){
            setLang('English')
            setisEngl(false)
        }
        else if(!isengl){
            setLang('Spanish')
            setisEngl(true)
        }
    }

    if(!isMobile){
        return(
            <button className='lang-btn' onClick={()=>toggleLang(isengl)}>{lang}</button> 
        )}
    else{
        return(
            <li style={mobileLangStyle}  onClick={()=>toggleLang(isengl)}>{lang}</li> 
        )
    }
}

const mobileLangStyle = {
    fontSize: '22px',
    fontWeight: '200'
};

export default LangButton;