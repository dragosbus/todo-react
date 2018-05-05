import React, { Component } from 'react';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            id: 1
        };
        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
        e.preventDefault();
        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let newTask = {
            id: this.state.id++,
            text: this._taskValue.value,
            date: {
                day: weekDays[new Date().getDay()],
                moment: new Date().toLocaleTimeString()
            }
        };
        this.setState(prevState => {
            return {
                items: prevState.items.concat(newTask)
            };
        });
    }

    render() {
        return (
            <form onSubmit={this.addTask}>
                <input type="text" className="form-value" ref={val => this._taskValue = val} />
                <input type="submit" className="form-submit" />
            </form>
        );
    }
}