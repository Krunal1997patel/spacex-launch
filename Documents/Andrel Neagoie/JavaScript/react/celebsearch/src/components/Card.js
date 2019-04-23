import React from 'react';

//disply the card with image, name, and email
const Card = ({name, email, id}) => {
    return (
        <div className='color dib br3 pa3 ma2 grow bw2 shadow-3 tc'>
            <img alt='Robot'src={`https://robohash.org/${id}/?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;