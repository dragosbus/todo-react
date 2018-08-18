import React, { Component } from 'react';
import { Task } from './Task';

export class Tasks extends Component {
  render() {
    return (
      <ul className="tasks">
        {this.props.items.map((task, i) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            remove={this.props.remove}
            editAction={this.props.editAction}
            complete={this.props.complete}
            completed={task.completed}
            moveUp={this.props.moveUp}
            index={i}
            items={this.props.items}
            move={this.props.move}
          />
        ))}
      </ul>
    );
  }
}
