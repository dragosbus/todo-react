import React, { Component } from 'react';
import {FaTrash} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa';
import {FaSave} from 'react-icons/fa';

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
      editBtn = (
        <button className="edit-btn" onClick={this.saveEdit}>
          <FaSave/>
        </button>
      );
      valueTask = <input ref={val => (this._newValue = val)} type="text" defaultValue={this.props.name} />;
    } else {
      editBtn = (
        <button className="edit-btn" onClick={this.editTask}>
          <FaEdit/>
        </button>
      );
      valueTask = <p>{this.props.name}</p>;
    }

    return (
      <li className={this.props.completed ? 'task task-completed' : 'task'}>
        <input checked={this.props.completed} type="checkbox" onChange={() => this.props.complete(this.props.id)} />
        <p>{valueTask}</p>
        <div className="btn-group">
          <button className="remove-btn" onClick={() => this.props.remove(this.props.id)}>
            <FaTrash/>
          </button>
          {editBtn}
        </div>
      </li>
    );
  }
}
