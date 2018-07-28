import React, { Component } from 'react';


export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }
    addTask(e) {
        e.preventDefault();
        this.setState({index: this.state.index + 1})
        this.props.addTask(this.state.index,this._taskValue.value)
    }

    render() {
        return (
            <main>
                <form onSubmit={this.addTask.bind(this)}>
                    <input type="text" className="form-value" ref={val => this._taskValue = val} />
                    <input type="submit" className="form-submit" />
                </form>
            </main>
        );
    }
}