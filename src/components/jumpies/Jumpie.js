import React from 'react';

function Jumpie ( { pic, title }){

    return(
        <div className='jump-card'>            
            <img className='picture hover' src={pic} alt={title}/>
                <label id='card-label'>{title}</label>
        </div>
        )
}

export default Jumpie;