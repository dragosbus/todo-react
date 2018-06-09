import React from 'react';

export const Task = props =>{
    return (
        <li className="task" id={props.id}>
            <div className="task-info">
                <p className="task-id">{props.id}</p>
                <div className="date">
                    <p className="task-date-day">{props.date.day}</p>
                    <p className="task-date-momment">{props.date.moment}</p>
                </div>
            </div>
            <div className="task-name">
                <p>{props.text}</p>
                <div className="btns">
                    <button className="remove-btn" onClick={props.removeTask}>Remove</button>
                    <button className="edit-btn">Edit</button>
                </div>
            </div>
        </li>
    );
};