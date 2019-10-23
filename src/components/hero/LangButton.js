import React, {useState} from 'react';
import './../../App.css';

function LangButton () {

    const [isengl, setisEngl] = useState(true);
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

    return(
        <button className='lang-btn' onClick={()=>toggleLang(isengl)}>{lang}</button> 
    )
}

export default LangButton;