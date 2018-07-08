import React, {Component} from 'react';
import { Task } from './Task';

export class Tasks extends Component {
    render() {
        return (
            <ul className="tasks">
                {this.props.items.map((task, i) => <Task key={i} id={task.id} name={task.text} date={task.date} remove={()=>this.props.remove(i)}/>)}
            </ul>
        );
    }
}
