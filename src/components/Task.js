import React, { Component } from 'react';

export class Task extends React.Component {
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
                <p className="task-name">{this.props.name}</p>
            </li>
        );
    }
}