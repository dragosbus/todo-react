import React, { Component } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import {Tasks} from './components/Tasks';
import {Modal} from './components/Modal';
import './App.css';

let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      tasks:[],
      editModalOn: false,
      idForEdit: 0
    }
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  addTask(name) {
    let newTask = {
      id:this.state.id,
      text: name,
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

  removeTask(e) {
    let id = +e.target.parentNode.parentNode.parentNode.id;
    this.setState(prevState=>{
      return{
        tasks: prevState.tasks.filter(task=>task.id !== id),
        //if is deleted last task the next id become the id of the task deleted.Otherwise become the last id +1
        id: id === prevState.tasks[prevState.tasks.length-1].id ? prevState.tasks[prevState.tasks.length-1].id : prevState.tasks[prevState.tasks.length-1].id + 1
      }
    });
  }

  editTask(e) {
    e.preventDefault();
    let taskForEdit = this.state.tasks[this.state.idForEdit];
    let inputVal = e.target.elements[0].value;
    taskForEdit.text = inputVal;
    this.setState(prevState=>{
      return {
        tasks: prevState.tasks.splice(this.state.idForEdit,0,taskForEdit)
      }
    });
    console.log(this.state.tasks)
    this.setState({
      editModalOn: !this.state.editModalOn
    });
  }

  toggleModal(e) {
    this.setState({
      editModalOn: !this.state.editModalOn,
      idForEdit: +e.target.parentNode.parentNode.parentNode.id - 1
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Form addTask={this.addTask}/>
        <Tasks items={this.state.tasks} removeTask={this.removeTask} togglerModal={this.toggleModal}/>
        <Modal editModalOn={this.state.editModalOn} togglerModal={this.toggleModal} editTask={this.editTask}/>
      </div>
    );
  }
}

export default App;
