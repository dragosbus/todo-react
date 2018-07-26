import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionTaskCreators from './actions/actions';
import { Header } from './components/Header';
import { Form } from './components/Form';
import {Tasks} from './components/Tasks';
import './App.css';

class App extends Component {
  render() {
    let {dispatch, tasks, checked} = this.props;
    console.log(tasks)
    const addTask = bindActionCreators(ActionTaskCreators.addTask, dispatch);
    const removeTask = bindActionCreators(ActionTaskCreators.removeTask, dispatch);
    const editTask = bindActionCreators(ActionTaskCreators.editTask, dispatch);
    const completeTask = bindActionCreators(ActionTaskCreators.completeTask, dispatch);
    const hideCompleted = bindActionCreators(ActionTaskCreators.hideCompleted, dispatch);
    return (
      <div className="app">
        <Header hideCompleted={hideCompleted} checked={checked}/>
        <Form addTask={addTask}/>
        <Tasks 
          items={tasks} 
          remove={removeTask}
          editAction = {editTask}
          complete={completeTask}
        />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    tasks: state.tasks,
    id: state.id,
    checked: state.checked
  }
);

export default connect(mapStateToProps)(App);
