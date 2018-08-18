import React, { Component } from 'react';

export class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      index: 0
    };
    this.editTask = this.editTask.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  editTask() {
    this.setState({ editMode: true, index: this.props.id });
  }

  saveEdit() {
    this.props.editAction(this.state.index, this._newValue.value);
    this.setState({ editMode: false });
  }

  render() {
    let editBtn;
    let valueTask;
    if (this.state.editMode) {
      editBtn = <button onClick={this.saveEdit}>Save</button>;
      valueTask = <input ref={val => (this._newValue = val)} type="text" defaultValue={this.props.name} />;
    } else {
      editBtn = <button onClick={this.editTask}>Edit</button>;
      valueTask = <p>{this.props.name}</p>;
    }

    return (
      <li className={this.props.completed ? 'task task-completed' : 'task'}>
        <div className="task-name">
          {valueTask}
          <button onClick={()=> this.props.remove(this.props.id)}>Remove</button>
          {editBtn}
          <input checked={this.props.completed} type="checkbox" onChange={()=>this.props.complete(this.props.id)}/>
        </div>
      </li>
    );
  }
}
