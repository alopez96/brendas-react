import React from 'react';

function Nav ({ goHome }) {

  return (
    <div>  
        <ul style={listStyle} className='nav-list'>
            <li onClick={()=>goHome()} style={listItem}>Home</li>
        </ul>
    </div>);
}

const listStyle = {
    display: 'inline',
    position: 'fixed',
    top: '0.5rem',
    right: '1rem' 
};

const listItem = {
    display: 'inline',
    marginLeft: '2rem',
    marginRight: '1rem',
    fontFamily: 'Nunito',
    fontWeight: '500',
    color: '#f74385',
    fontSize: '1.5em'
};

export default Nav;