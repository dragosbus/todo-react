import React, { Component } from 'react';
import { Tasks } from './Tasks';


let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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
        
        if (this._taskValue.value) {
            this.setState({
                items: this.state.items.concat({
                    id: this.state.id + 1,
                    text: this._taskValue.value,
                    date: {
                        day: weekDays[new Date().getDay()],
                        moment: new Date().toLocaleTimeString()
                    }
                })
            });
        } else {
            alert('Enter a value');
        }
        this._taskValue.value = '';
    }

    render() {
        return (
            <main>
                <form onSubmit={this.addTask}>
                    <input type="text" className="form-value" ref={val => this._taskValue = val} />
                    <input type="submit" className="form-submit" />
                </form>
                <Tasks items={this.state.items}/>
            </main>
        );
    }
}