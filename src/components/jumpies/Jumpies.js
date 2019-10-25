import React from 'react';
import Jumpie from './Jumpie';
import SearchBox from './SearchBox';
import img1 from './images/b1.jpg';
import img2 from './images/b2.jpeg';

function Jumpies() {

    const list = [
        { name: 'spongebob', image: img1 },
        { name: 'junior', image: img2 },
        { name: 'spongebob', image: img1 },
        { name: 'junior', image: img2 },
        { name: 'spongebob', image: img1 },
        { name: 'junior', image: img2 },
        { name: 'spongebob', image: img1 },
        { name: 'junior', image: img2 },
        { name: 'spongebob', image: img1 },
        { name: 'junior', image: img2 },
    ]
    
    return(
        <div className='background'>
            <SearchBox/>    
            <div className='list'>
                {list.map((item,index) => {
                    return(
                        <Jumpie pic={item.image} key={index} title={item.name}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Jumpies;