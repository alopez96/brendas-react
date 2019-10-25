import React from 'react';
import './jumpies.css';

function Jumpie ( { pic, title }){

    return(
        <div className='jump-card'>            
            <img className='picture' src={pic} alt={title}/>
            <label>{title}</label>
        </div>
    )
}

export default Jumpie;