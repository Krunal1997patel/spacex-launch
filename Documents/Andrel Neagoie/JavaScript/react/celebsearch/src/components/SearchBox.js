import React from 'react';

//the Search bar
//filter the robot by names and send data to app.js
const SearchBox = ({searchchange}) =>{
    return(
        <div className='pa2 grow dib'>
            <input 
                className='pa3 ba bg-lightest-blue'
                type='serach' 
                placeholder='search robot' 
                name='search'
                onChange={searchchange} 
            />
        </div>
    );
}

export default SearchBox;