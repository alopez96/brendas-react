import React, { useState } from 'react';
import Jumpie from './Jumpie';
import SearchBox from './SearchBox';
import img1 from './images/b1.jpg';
import img2 from './images/b2.jpeg';

function Jumpies({ updateRoute }) {

    const [searchfield, setSearchfield] = useState('');

    const list = [
        { name: 'spongebob', image: img1, },
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

    const updateSearchfield = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredItems = list.filter(item => {
        return item.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    const goHome = () => {
        updateRoute('home');
    }

    return(
        <div className='background'>
            <SearchBox search={updateSearchfield}/> 
            <button onClick={()=> goHome()}>home</button>   
            <div className='list'>
                {filteredItems.map((item,index) => {
                    return(
                        <Jumpie pic={item.image} key={index} title={item.name}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Jumpies;