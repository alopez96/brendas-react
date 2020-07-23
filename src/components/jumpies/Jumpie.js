import React from 'react';
import './jumpies.css';

function Jumpie ( { pic, title, isMobile }){

    if(!isMobile){
        return(
            <div className='jump-card'>            
                <img className='picture hover' src={pic} alt={title}/>
                <div id='card-label'>
                    <label>{title}</label>
                </div>    
            </div>)
    }
    else{
        return(
            <div className='jump-card-m'>            
                <img className='picture-m' src={pic} alt={title}/>
                <label>{title}</label>
            </div>
        )
    }
}

export default Jumpie;