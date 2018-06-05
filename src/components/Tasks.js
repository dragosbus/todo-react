import React, { Component } from 'react';
import { Task } from './Task';


export const Tasks = props =>{
    return(
        <ul className="tasks">
            {props.items.map((task, i) => <Task key={i} id={task.id} name={task.text} date={task.date} removeTask={props.removeTask}/>)}
        </ul> 
    );
};