import React, { Component } from 'react';

export class Tasks extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map((task, i) => <Task key={i} id={task.id} name={task.text} date={task.date} />)}
            </ul>
        );
    }
}