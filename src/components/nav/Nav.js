import React, { useState, useEffect } from 'react';
import LangButton from './LangButton';
import MobileNav from './MobileNav';
import './nav.css';

function Nav ({ goToRef, homeRef, aboutRef, contactRef, isMobile, isengl, setisEngl, updateRoute }) {

  const [lang, setLang] = useState('Espa\u00f1ol');

  const toggleLang = (isengl) => {
      if(isengl){
          console.log('set lang to spanish')
          setLang('English')
          setisEngl(false)
      }
      else if(!isengl){
          console.log('set lang to english')
          setLang('Espa\u00f1ol')
          setisEngl(true)
      }
  }
        
    const [yindex, setyindex] = useState(window.pageYOffset);

    //like component did mount
  useEffect(() => {
    window.addEventListener('scroll', () => { updatePosition() });

    //returned function will be called on component unmount 
    return () => {
        window.removeEventListener('scroll', () => { })
    }
  }, []);

  const updatePosition = () => setyindex(window.pageYOffset);

  if(!isMobile){
    if(yindex < 50){
      return (
        <div>  
          <p style={bizName}>Brendas Jumpies</p>
            <ul style={listStyle} className='nav-list'>
            <li onClick={() => updateRoute('list')} style={listItem}>Gallery</li>
                <li onClick={()=>goToRef(contactRef)} style={listItem}>Contact</li>
                <li style={listItem}>
                  <LangButton isMobile={false} isengl={isengl} setisEngl={setisEngl} lang={lang} toggleLang={toggleLang} />
              </li>
            </ul>
        </div>);
    }
    else{
        return(
          <div></div>
          )
    }}
    else{
      return(
        <MobileNav goToRef={goToRef} homeRef={homeRef} 
                aboutRef={aboutRef} contactRef={contactRef} isengl={isengl} 
                setisEngl={setisEngl} lang={lang} toggleLang={toggleLang} updateRoute={updateRoute}/>
      )
    }
}


const bizName = {
  display: 'inline',
  position: 'fixed',
  top: '1rem',
  left: '3rem',
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold'
};

const listStyle = {
    display: 'inline',
    position: 'fixed',
    top: '1rem',
    right: '3rem' 
};

const listItem = {
    display: 'inline',
    marginLeft: '2rem',
    marginRight: '2rem',
    fontFamily: 'Nunito',
    fontWeight: '500',
    color: '#fff',
    fontSize: '1.2em'
};

const listStyle2 = {
    display: 'inline',
    position: 'fixed',
    top: '0rem',
    backgroundColor: '#A1C3D1',
    width: '100vw',
    height: '5vh',
    padding: '1.5em 0em 0.5em 0em',
    marginTop: '-0.1em'
};

const listItem2 = {
    display: 'inline',
    marginLeft: '2rem',
    marginRight: '2rem',
    fontFamily: 'Nunito',
    fontWeight: '600',
    color: '#fff',
    fontSize: '1.2em',
};

const btn = {
  backgroundColor: 'transparent',
  border: 'none'
}


export default Nav;