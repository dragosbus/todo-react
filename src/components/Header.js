import React, { Component } from 'react';

export class Header extends Component {
  changeFilter(e) {
    this.props.filterTodos(e.target.value);
  }

  render() {
    return (
      <header>
        <h1>ToDo App</h1>
        <div>
          <select value={this.props.filter} onChange={this.changeFilter.bind(this)} className="filter-select">
            <option value="SHOW_ALL">Show All</option>
            <option value="SHOW_COMPLETED">Show Completed</option>
            <option value="SHOW_ACTIVE">Show Active</option>
          </select>
        </div>
      </header>
    );
  }
}
