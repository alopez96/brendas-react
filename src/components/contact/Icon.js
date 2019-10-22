import React from 'react';
import './main.css';

function Icon (data) {

    const ref = data.data;

    return(
        <div>
            {ref.cta === 'primary' ?   
            <div className='contain primary'>
                <a href={ref.link} alt={ref.alt}>
                    <img src={ref.image}/>
                </a>
                <a href={ref.link} className='data-text'>
                    {ref.text}
                </a>
            </div>     
            :
            <div  className='contain'>
                <a href={ref.link} alt={ref.alt}>
                    <img src={ref.image}/>
                </a>
                <a href={ref.link} className='data-text'>
                    {ref.text}
                </a>
            </div>
            }
        </div>
    )
}

export default Icon;