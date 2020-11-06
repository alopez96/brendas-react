import React, { useState, useEffect } from 'react';

import img1 from './images/big_slide.jpg';
import img2 from './images/b8.jpg';
import img3 from './images/big_slide.jpg';

function JumpieSlider({ updateRoute }) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
    <div className='slider'>
      <div className='position-relative'>
        <img className='slider-image' src={img1} alt={'title'}/>
        {/* <img className='slider-image' src={img2} alt={'title'}/>
        <img className='slider-image' src={img3} alt={'title'}/> */}
        
        <div className='text-center '>
        <button className='secondary-cta slider-btn' onClick={() => updateRoute('jumpies')} >View all rentals</button>
        </div>
      </div>
    </div>
      )
  }
  
  export default JumpieSlider