import React, {Component} from 'react';

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
        this.setState({editMode: true, index: this.props.id});
    }

    saveEdit() {
        this.props.editAction(this.state.index,this._newValue.value);
        this.setState({editMode: false});
    }

    render() {
        let editBtn;
        let valueTask;
        if(this.state.editMode) {
            editBtn = <button onClick={this.saveEdit}>Save</button>
            valueTask = <input ref={val=>this._newValue=val} type="text" defaultValue={this.props.name}/>
        } else {
            editBtn = <button onClick={this.editTask}>Edit</button>
            valueTask = <p>{this.props.name}</p>
        }

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
                    {valueTask}
                    <button onClick={this.props.remove}>Remove</button>
                    {editBtn}
                </div>
            </li>
        );
    };
}