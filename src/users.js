import React, { Component } from 'react'
// import faker from 'faker';

export default class UsersList extends Component {
    render() {
        // const randUserName = `@${faker.internet.userName().toLowerCase()}`;
        return (
            <div className="users">
                <h3 className="users__title">Online users:</h3>

                <ul>
                    {this.props.users.map(user => {
                        return <li key={user}>{user}</li>
                    })}
                </ul>

                <button onClick={this.props.addNewUser}>
                    add new user
                </button>
            </div>
        )
    }
}