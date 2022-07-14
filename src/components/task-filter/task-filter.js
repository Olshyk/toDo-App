import React, { Component } from "react";

import PropTypes from "prop-types";

import "./task-filter.css";

export default class TaskFilter extends Component {
  static defaultProps = {
    filter: "all",
    name: "all",
    label: "All",
    onFilterChange: () => {},
  };

  static propTypes = {
    filter: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    onFilterChange: PropTypes.func,
  };

  render() {
    const { filter, name, label, onFilterChange } = this.props;

    const clazz = filter === name ? "selected" : null;

    return (
      <li>
        <button type="button" className={clazz} onClick={onFilterChange}>
          {label}
        </button>
      </li>
    );
  }
}
