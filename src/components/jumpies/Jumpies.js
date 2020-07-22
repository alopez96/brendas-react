import React, { useState } from 'react';
import Jumpie from './Jumpie';
import SearchBox from './SearchBox';
import GoHomeNav from '../go-home-nav/GoHomeNav';

import img1 from './images/b1.jpg';
import img2 from './images/b2.jpeg';
import img3 from './images/b3.jpg';
import img4 from './images/b4.jpg';
import img5 from './images/b5.jpg';
import img6 from './images/b6.jpg';
import img7 from './images/b7.jpg';
import img8 from './images/b8.jpg';
import img9 from './images/b9.jpeg';
import tent from './images/tent.jpg';

import ninja from './images/tmnt.JPG';
import sponge from './images/sponge.JPG';
import paw from './images/paw.JPG';
import tinker from './images/tinker.JPG';
import mickeyFriends from './images/mickeyFriends.JPG';
import minions from './images/minions.JPG';
import hulk from './images/hulk.JPG';
import kitty from './images/helloKitty.JPG';
import spider from './images/spiderman.JPG';

function Jumpies({ updateRoute }) {

    const [searchfield, setSearchfield] = useState('');

    const backBtn = '< Go back';

    const list = [
        
        { name: 'slide', image: img2 },
        
        { name: 'slide 2', image: img4 },
        { name: 'slide 3', image: img9 },
        { name: 'pink slide', image: img8 },
        { name: 'Pony', image: img1, },
        { name: 'Moana', image: img3 },
        { name: 'Batman', image: img5 },
        { name: 'The Good Dinosaur', image: img6 },
        { name: 'Mikey Mouse', image: img7 },
        { name: 'tent', image: tent },

        { name: 'Ninja Turtles', image: ninja },
        { name: 'Spongebob', image: sponge },
        { name: 'Paw Patrol', image: paw },
        { name: 'Tinker Bell', image: tinker },
        { name: 'Mickey and Friends', image: mickeyFriends },
        { name: 'Minions', image: minions },
        { name: 'Hulk', image: hulk },
        { name: 'Hello Kitty', image: kitty },
        { name: 'Spiderman', image: spider },
    ]

    const updateSearchfield = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredItems = list.filter(item => {
        return item.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    const goHome = () => {
        window.scrollTo(0, 0)
        updateRoute('home');
    }

    return(
        <div className='background'>
            <div className='jump-top'>
                <GoHomeNav goHome={goHome}/>
                <SearchBox search={updateSearchfield}/> 
            </div>
            <div className='jump-list'>
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