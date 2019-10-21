import React, { useState } from 'react';
import LangButton from './LangButton';

function Nav () {

    return (
      <div>  
          <ul style={listStyle}>
              <li style={listItem}>Home</li>
              <li style={listItem}>Rentals</li>
              <li style={listItem}>Contact</li>
              <li style={listItem}> 
                <LangButton/>
            </li>
          </ul>
      </div>
    );
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
    color: '#fff'
};


export default Nav;