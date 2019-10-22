import React from 'react';

function Icon (data) {

    const ref = data.data;

    return(
        <div>
            {/* image */}
            <a href={ref.link} alt={ref.alt}>
                <img src={ref.image}/>
            </a>
            {/* link */}
            <a href={ref.link}>
                {ref.text}
            </a>
        </div>
    )
}

export default Icon;