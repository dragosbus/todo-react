import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <header>
                <h1>ToDo App</h1>
                <input type="checkbox" onChange={this.props.hideCompleted}/>
            </header>
        );
    }
}