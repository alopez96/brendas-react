import React from 'react';
import './jumpies.css';

function Jumpie ( { pic, title }){

    return(
        <div className='jump-card'>            
            <img className='picture hover' src={pic} alt={title}/>
            <div id='card-label'>
                <label>{title}</label>
            </div>    
        </div>)
}

export default Jumpie;