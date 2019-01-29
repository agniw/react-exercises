import React from 'react';
import List from './List'

class UsersList extends React.Component {
    render(){
        return (
            <div>
                <h1> Users List </h1>
                <List />
            </div>
        )
    }
}

export default UsersList;