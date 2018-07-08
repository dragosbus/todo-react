import React from 'react';


export const Modal = props =>{
    return(
        <div className="overlay" style={{display: props.editModalOn ? 'block' : 'none'}}>
            <div className="modal">
            <button className="exit-modal" onClick={props.togglerModal}>X</button>
                <form onSubmit={props.editTask}>
                    <input type="text" className="new-value" placeholder="New name"/>
                    <button type="submit">Edit</button>
                </form>
            </div>
        </div>
    );
};