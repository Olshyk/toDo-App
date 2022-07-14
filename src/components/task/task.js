import React, { Component } from "react";

import PropTypes from "prop-types";

import "./task.css";

import { formatDistanceToNow } from "date-fns";

export default class Task extends Component {
  state = {
    label: this.props.label,
    date: new Date(),
  };

  static defaultProps = {
    label: "Drink Coffee",
    completed: false,
    editing: false,
    onDeleted: () => {},
    onCompleted: () => {},
    onEdit: () => {},
  };

  static propTypes = {
    label: PropTypes.string,
    comleted: PropTypes.bool,
    editing: PropTypes.bool,
    onDeleted: PropTypes.func,
    onCompleted: PropTypes.func,
    onEdit: PropTypes.func,
    id: PropTypes.number.isRequired,
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onEdited(this.state.label, this.props.id);
    this.setState({
      label: this.props.label,
    });
  };

  render() {
    const {
      label,
      onDeleted,
      onCompleted,
      completed,
      editing,
      onEdit,
    } = this.props;

    let classNames = "";
    if (completed) {
      classNames += " completed";
    }
    if (editing) {
      classNames += " editing";
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onCompleted} />
          <label>
            <span className="description">{label}</span>
            <span className="created">
              created{" "}
              {formatDistanceToNow(this.state.date, { includeSeconds: true })}{" "}
              ago
            </span>
          </label>
          <button className="icon icon-edit" onClick={onEdit}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="edit"
            value={this.state.label}
            onChange={this.onLabelChange}
          />
        </form>
      </li>
    );
  }
}
