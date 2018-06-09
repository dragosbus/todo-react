import React from 'react';
import { Task } from './Task';


export const Tasks = props =>{
    return(
        <ul className="tasks">
            {props.items.map((task, i) => <Task key={i} id={task.id} text={task.text} date={task.date} removeTask={props.removeTask} togglerModal={props.togglerModal}/>)}
        </ul> 
    );
};