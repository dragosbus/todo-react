import React, { Component } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import {Tasks} from './components/Tasks';
import './App.css';

let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      tasks:[]
    }
    this.addTask = this.addTask.bind(this);
  }

  addTask(name) {
    let newTask = {
      id:this.state.id,
      name: name,
      date: {
        day: weekDays[new Date().getDay()],
        moment: new Date().toLocaleTimeString()
      }
    };
    this.setState(prevState=>{
      return {
        tasks: prevState.tasks.concat(newTask),
        id: prevState.id+1
      }
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Form addTask={this.addTask}/>
        <Tasks items={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
