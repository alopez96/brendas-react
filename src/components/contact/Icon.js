import React from 'react';
import './main.css';

function Icon (data) {

    const ref = data.data;

    return(
        <div> 
            <div  className='contain'>
                <a href={ref.link} alt={ref.alt}>
                    <img src={ref.image} alt={ref.alt}/>
                </a>
                <a href={ref.link} className='data-text'>
                    {ref.text}
                </a>
            </div>
        </div>
    )
}

export default Icon;