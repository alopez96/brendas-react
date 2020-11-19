import React from 'react';

const SearchBox = ({ search }) => {

    return(
        <div className='search-container'>
            <label>Find a jump house</label>
            <input className='search-box' type='search'
                placeholder='Enter a name' onChange={search}/>
        </div>
    )
}

export default SearchBox;