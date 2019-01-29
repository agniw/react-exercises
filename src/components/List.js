import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').
        then(response => {
            return response.json();
        }).
        then(data => {
            this.setState({users: data})
        })
    }

    render() {
        const list = (
            <div>
                {this.state.users.map(item => {
                    return (
                        <ListItem key={item.id} user={item} />
                    )
                })}
            </div>
        )
        return (
            list
        )
    }
}

export default List;