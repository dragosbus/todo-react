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
      tasks: [],
      id: 1
    };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(name) {
    let newTask = {
      id: this.state.id++,
          text: name,
          date: {
            day: weekDays[new Date().getDay()],
            moment: new Date().toLocaleTimeString()
          }
    }
    if (name) {
      this.setState(prevState=>{
        return {
          tasks: prevState.tasks.concat(newTask)
        }
      });
    } else {
      alert('Enter a value');
    }
  }

  removeTask(index) {
    //remove the element clicked
    this.state.tasks.splice(index, 1);
    //reset the id's
    this.state.tasks.forEach((task, i)=>{
      task.id = i+1;
    });
    this.setState(prevState=>{
      return{
        tasks: prevState.tasks
      }
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Form addTask={this.addTask}/>
        <Tasks 
          items={this.state.tasks} 
          remove={this.removeTask}
        />
      </div>
    );
  }
}

export default App;
