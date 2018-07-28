import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <header>
                <h1>ToDo App</h1>
                <div>
                    <button onClick={()=>this.props.filterTodos('SHOW_ALL')}>Show All</button>
                    <button onClick={()=>this.props.filterTodos('SHOW_COMPLETED')}>Show Completed</button>
                    <button onClick={()=>this.props.filterTodos('SHOW_ACTIVE')}>Show Active</button>
                </div>
            </header>
        );
    }
}