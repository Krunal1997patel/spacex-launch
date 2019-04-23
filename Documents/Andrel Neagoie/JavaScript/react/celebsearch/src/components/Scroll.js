import React from 'react';

//make the title and search on fix place in smaller screen
const Scroll = (props) => {
    return(
        <div style={{ overflowY: 'auto',  border: '1px solid black', height: '800px' }}>
            {props.children}
        </div>
    )
}

export default Scroll;