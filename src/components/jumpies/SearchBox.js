import React from 'react';
import './jumpies.css';

const SearchBox = ({ search, isMobile }) => {

    if(!isMobile){
        return(
            <div className='search-container'>
                <label>Find a jump house</label>
                <input className='search-box' type='search'
                    placeholder='Enter a name of a character' onChange={search}/>
            </div>
        )}
    else{
        return(
            <div className='search-container-m'>
                <label>Find a jump house</label>
                <input className='search-box-m' type='search'
                    placeholder='Enter a name' onChange={search}/>
            </div>
        )
    }
}

export default SearchBox;