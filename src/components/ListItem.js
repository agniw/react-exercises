import React from 'react';

const ListItem = ({user}) => {
    const { name, username, website } = user
    return (
        <div className='item'> 
            <p> Name: {name}, username: {username}, website: {website} </p>
        </div>
    )
}

export default ListItem;