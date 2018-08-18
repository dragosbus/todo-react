import React, { Component } from 'react';
import { Task } from './Task';

export class Tasks extends Component {
  render() {
    return (
      <ul className="tasks">
        {this.props.items.map(task => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            date={task.date}
            remove={this.props.remove}
            editAction={this.props.editAction}
            complete={this.props.complete}
            completed={task.completed}
          />
        ))}
      </ul>
    );
  }
}
