import React, { Component } from "react";

import "./task.css";

import { formatDistanceToNow } from "date-fns";

export default class Task extends Component {
  state = {
    completed: false,
    editing: false,
  };

  onCompleted = () => {
    this.setState(({ completed }) => {
      return {
        completed: !completed,
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { completed } = this.state;

    let classNames = "";
    if (completed) {
      classNames += " completed";
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={this.onCompleted}
          />
          <label>
            <span className="description">{label}</span>
            <span className="created">
              created{" "}
              {formatDistanceToNow(new Date(), { includeSeconds: true })} ago
            </span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <input type="text" className="edit" defaultValue="Editing task" />
      </li>
    );
  }
}
