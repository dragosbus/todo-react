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
    let {dispatch, tasks} = this.props;
    const addTask = bindActionCreators(ActionTaskCreators.addTask, dispatch);
    return (
      <div className="app">
        <Header />
        <Form addTask={addTask}/>
        <Tasks 
          items={tasks} 
          remove={this.removeTask}
        />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    tasks: state
  }
);

export default connect(mapStateToProps)(App);
