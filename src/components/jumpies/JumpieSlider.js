import React, { useState, useEffect } from 'react';

import img1 from './images/big_slide.jpg';
import img2 from './images/b8.jpg';
import img3 from './images/b2.jpeg';
import img4 from './images/tinker.JPG';
import img5 from './images/b4.jpg';
import img6 from './images/paw.JPG';

function JumpieSlider({ updateRoute }) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
    <div className='slider gray'>
        <img className='slider-image' src={img1} alt={'title'}/>
        <img className='slider-image' src={img2} alt={'title'}/>
        <img className='slider-image' src={img3} alt={'title'}/>
        <img className='slider-image' src={img4} alt={'title'}/>
        <img className='slider-image' src={img5} alt={'title'}/>
        <img className='slider-image' src={img6} alt={'title'}/>
        
        <div className='text-center padding'>
        <button className='primary-cta' onClick={() => updateRoute('jumpies')} >See full gallery</button>
        </div>
    </div>
      )
  }
  
  export default JumpieSlider