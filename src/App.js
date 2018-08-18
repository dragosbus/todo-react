import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionTaskCreators from './actions/actions';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';
import './App.css';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
  }
};

class App extends Component {
  render() {
    let { tasks, filter, addTask, removeTask, editTask, completeTask, visibilityFilter } = this.props;
    let todos = getVisibleTodos(tasks, filter);

    return (
      <div className="app">
        <Header filterTodos={visibilityFilter()} />
        <Form addTask={addTask()} />
        <Tasks 
          id={tasks.id} 
          items={todos} 
          remove={removeTask()} 
          editAction={editTask()} 
          complete={completeTask()} 
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.taskReducer,
  filter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  addTask() {
    return bindActionCreators(ActionTaskCreators.addTask, dispatch);
  },
  removeTask() {
    return bindActionCreators(ActionTaskCreators.removeTask, dispatch);
  },
  editTask() {
    return bindActionCreators(ActionTaskCreators.editTask, dispatch);
  },
  completeTask() {
    return bindActionCreators(ActionTaskCreators.completeTask, dispatch);
  },
  visibilityFilter() {
    return bindActionCreators(ActionTaskCreators.visibilityFilter, dispatch);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
