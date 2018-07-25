import React, {Component} from 'react';
import { Task } from './Task';

export class Tasks extends Component {
    render() {
        return (
            <ul className="tasks">
                {this.props.items.map((task, i) => <Task key={task.id} id={task.id} name={task.name} date={task.date} remove={()=>this.props.remove(i)} editAction={this.props.editAction}/>)}
            </ul>
        );
    }
}
