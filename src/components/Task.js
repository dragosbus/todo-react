import React, { Component } from 'react';

export class Task extends Component {
    constructor(props) {
        super(props);
    }

    removeTask(e) {
        console.log(e.target.parentNode.parentNode);
    }

    render() {
        return (
            <li className="task" id={this.props.id}>
                <div className="task-info">
                    <p className="task-id">{this.props.id}</p>
                    <div className="date">
                        <p className="task-date-day">{this.props.date.day}</p>
                        <p className="task-date-momment">{this.props.date.moment}</p>
                    </div>
                </div>
                <div className="task-name">
                    <p>{this.props.name}</p>
                    <button onClick={this.removeTask.bind(this)}>Remove</button>
                </div>
            </li>
        );
    }
}