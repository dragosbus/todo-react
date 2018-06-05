import React, { Component } from 'react';


export class Form extends Component {

    addTask(e) {
        e.preventDefault();
        this.props.addTask(this._taskValue);
    }

    render() {
        return (
            <form onSubmit={this.addTask.bind(this)}>
                <input type="text" className="form-value" ref={val => this._taskValue = val} />
                <input type="submit" className="form-submit" />
            </form>
        );
    }
}