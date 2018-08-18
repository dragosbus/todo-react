import React, { Component } from 'react';
import {v4} from 'node-uuid';
import {FaPlusCircle} from 'react-icons/fa';

export class Form extends Component {
    
    addTask(e) {
        e.preventDefault();
        this.props.addTask(v4(),this._taskValue.value)
    }

    render() {
        return (
            <main>
                <form onSubmit={this.addTask.bind(this)}>
                    <input type="text" className="form-value" ref={val => this._taskValue = val} placeholder="Add a new Task"/>
                    <button className="form-submit" type="submit">
                        <FaPlusCircle/>
                    </button>
                </form>
            </main>
        );
    }
}