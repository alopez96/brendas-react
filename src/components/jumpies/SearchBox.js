import React from 'react';
import './jumpies.css';

const SearchBox = ({ search }) => {

    return(
        <div className='search-container'>
            <label>Find a jump house</label>
            <input className='search-box' type='search'
                 placeholder='Enter a name of a character' onChange={search}/>
        </div>
    )
}

export default SearchBox;