import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionTaskCreators from './actions/actions';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';
import AlertWrapper from './components/SuccessAlert';
import './App.css';

const success = <div className="success">Successfully</div>;
let SuccessAlert = AlertWrapper(null, null);

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

  showAlert(message) {
    SuccessAlert = AlertWrapper(success, message);    
  }

  componentDidUpdate() {
    setTimeout(() => {
      SuccessAlert = AlertWrapper(null, null);
      document.querySelector('.alert').style.display='none';
    }, 4000);
  }
  
  render() {
    let { tasks, filter, addTask, removeTask, editTask, completeTask, visibilityFilter } = this.props;
    let todos = getVisibleTodos(tasks, filter);
    let todosCompleted = tasks.filter(todo=>todo.completed);
    
    return (
      <div className="app">
        <Header 
          filterTodos={visibilityFilter} 
          items={todos}
          completed={todosCompleted}
        />
        <Form addTask={addTask} />
        <Tasks
          id={tasks.id}
          items={todos}
          remove={removeTask}
          editAction={editTask}
          complete={completeTask}
          moveUp={this.props.moveUp}
          moveDown={this.props.moveDown}
          messageAlert={this.showAlert.bind(this)}
        />
        <SuccessAlert/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.taskReducer,
  filter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  addTask: bindActionCreators(ActionTaskCreators.addTask, dispatch),
  removeTask: bindActionCreators(ActionTaskCreators.removeTask, dispatch),
  editTask: bindActionCreators(ActionTaskCreators.editTask, dispatch),
  completeTask: bindActionCreators(ActionTaskCreators.completeTask, dispatch),
  visibilityFilter: bindActionCreators(ActionTaskCreators.visibilityFilter, dispatch),
  moveUp: bindActionCreators(ActionTaskCreators.moveUp, dispatch),
  moveDown:  bindActionCreators(ActionTaskCreators.moveDown, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
