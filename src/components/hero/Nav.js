import React, { useState, useEffect } from 'react';
import LangButton from './LangButton';
import './nav.css';

function Nav ({ goToRef, homeRef, aboutRef, contactRef }) {

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

  if(yindex < 100){
    return (
      <div>  
          <ul style={listStyle} className='list'>
              <li onClick={()=>goToRef(homeRef)} style={listItem}>Home</li>
              <li onClick={()=>goToRef(aboutRef)} style={listItem}>Rentals</li>
              <li onClick={()=>goToRef(contactRef)} style={listItem}>Contact</li>
              <li style={listItem}> 
                <LangButton/>
            </li>
          </ul>
      </div>
    );
  }
  else{
      return(
        <ul style={listStyle2} className='list'>
            <li onClick={()=>goToRef(homeRef)} style={listItem2}>Home</li>
            <li onClick={()=>goToRef(aboutRef)} style={listItem2}>Rentals</li>
              <li onClick={()=>goToRef(contactRef)} style={listItem2}>Contact</li>
            <li style={listItem2}> 
              <LangButton/>
          </li>
        </ul>
      )
  }
}

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