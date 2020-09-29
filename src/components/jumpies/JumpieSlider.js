import React, { useState, useEffect } from 'react';

import img1 from './images/b2.jpeg';
import img2 from './images/b8.jpg';
import img3 from './images/big_slide.jpg';

import ninja from './images/tmnt.JPG';
import sponge from './images/sponge.JPG';
import paw from './images/paw.JPG';

function JumpieSlider() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
    <div className='slider'>
      <div>
        <img className='slider-image' src={img1} alt={'title'}/>
        <img className='slider-image' src={img2} alt={'title'}/>
        <img className='slider-image' src={img3} alt={'title'}/>
      </div>
    </div>
      )
  }
  
  export default JumpieSlider