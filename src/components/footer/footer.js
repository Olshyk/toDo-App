import React, { Component } from "react";

import PropTypes from "prop-types";

import TaskFilter from "../task-filter";

import "./footer.css";

export default class Footer extends Component {
  static defaultProps = {
    toDo: 0,
    filter: "all",
    clearCompleted: () => {},
    onFilterChange: () => {},
  };

  static propTypes = {
    toDo: PropTypes.number,
    filter: PropTypes.string,
    clearCompleted: PropTypes.func,
    onFilterChange: PropTypes.func,
  };

  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "completed", label: "Completed" },
  ];

  render() {
    const { toDo, clearCompleted, filter, onFilterChange } = this.props;
    const buttons = this.buttons.map((item) => {
      const { name } = item;

      return (
        <TaskFilter
          key={name}
          {...item}
          filter={filter}
          onFilterChange={() => onFilterChange(name)}
        />
      );
    });

    return (
      <footer className="footer">
        <span className="todo-count">{toDo} items left</span>
        <ul className="filters">{buttons}</ul>
        <button className="clear-completed" onClick={() => clearCompleted()}>
          Clear completed
        </button>
      </footer>
    );
  }
}
