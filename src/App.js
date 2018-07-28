import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionTaskCreators from './actions/actions';
import { Header } from './components/Header';
import { Form } from './components/Form';
import {Tasks} from './components/Tasks';
import './App.css';

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo=> todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo=> !todo.completed);
  }
};

class App extends Component {
  render() {
    let {dispatch, tasks, filter} = this.props;
    let todos=getVisibleTodos(tasks, filter);
    
    const addTask = bindActionCreators(ActionTaskCreators.addTask, dispatch);
    const removeTask = bindActionCreators(ActionTaskCreators.removeTask, dispatch);
    const editTask = bindActionCreators(ActionTaskCreators.editTask, dispatch);
    const completeTask = bindActionCreators(ActionTaskCreators.completeTask, dispatch);
    const visibilityFilter = bindActionCreators(ActionTaskCreators.visibilityFilter, dispatch);
    return (
      <div className="app">
        <Header filterTodos={visibilityFilter}/>
        <Form addTask={addTask}/>
        <Tasks
          id={tasks.id}
          items={todos}
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
    tasks: state.taskReducer,
    filter: state.visibilityFilter
  }
);

export default connect(mapStateToProps)(App);
