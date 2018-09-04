import React, { Component } from 'react'

export class AutoComplete extends Component {


    getData = (val) => {
        this.props.actions(val)
    }

    render() {
        return (
            <div>
                <div><input type='text' onChange={(e) => this.getData(e.target.value)}></input>

           
                </div>
            </div>
        )
    }
}
