import React from 'react';
import Card from './Card';

//get data from card and sent to app.js
const CardList = ({robots}) =>{
    
    return(
        <div>
            {
                robots.map(user =>{
                    return (
                        <Card 
                            key    =  {user.id} 
                            id     =  {user.id} 
                            name   =  {user.name} 
                            email  =  {user.email}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;



/*

const cardArray = robots.map(user =>{
        return (
            <Card 
                key    =  {user.id} 
                id     =  {user.id} 
                name   =  {user.name} 
                email  =  {user.email}
            />
        )
    })

    return (
        <div>
            {cardArray}
        </div>
    )

*/


