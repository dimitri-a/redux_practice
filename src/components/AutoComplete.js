import React, { Component } from 'react'

export class AutoComplete extends Component {

    constructor() {
        super();
    }

    getData = (val) => {
        const { getUsers } = this.props.actions;
        getUsers(val)
    }

    render() {
        // debugger
        const { users } = this.props;
        console.log(users);

        return (
            <div>
                <div>
                    <input type='text' onChange={(e) => this.getData(e.target.value)}></input>
                </div>
                <ul>
                {users.map((u) => {
                    return <li>{u.name}</li>
                })}
                </ul>
            </div>
        )
    }
}
