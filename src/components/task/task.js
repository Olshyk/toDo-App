import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import './task.css';

export default class Task extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    text: this.props.label,
    date: new Date(),
  };

  static defaultProps = {
    label: 'Drink Coffee',
    completed: false,
    editing: false,
    onDeleted: () => {},
    onCompleted: () => {},
    onEdit: () => {},
    onEdited: () => {},
  };

  static propTypes = {
    label: PropTypes.string,
    completed: PropTypes.bool,
    editing: PropTypes.bool,
    onDeleted: PropTypes.func,
    onCompleted: PropTypes.func,
    onEdit: PropTypes.func,
    onEdited: PropTypes.func,
    id: PropTypes.number.isRequired,
  };

  componentDidMount() {
    this.update = setInterval(() => {
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        time: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.update);
  }

  onLabelChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { onEdited, id, label } = this.props;
    const { text } = this.state;
    onEdited(text, id);
    this.setState({
      text: label,
    });
  };

  render() {
    const { label, onDeleted, onCompleted, completed, editing, onEdit } = this.props;
    const { text, date } = this.state;

    let classNames = '';
    if (completed) {
      classNames += ' completed';
    }
    if (editing) {
      classNames += ' editing';
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onCompleted} />
          <label>
            <span className="description">{label}</span>
            <span className="created">created {formatDistanceToNow(date, { includeSeconds: true })} ago</span>
          </label>
          <button className="icon icon-edit" type="button" label="edit" onClick={onEdit} />
          <button className="icon icon-destroy" type="button" label="delete" onClick={onDeleted} />
        </div>
        <form onSubmit={this.onSubmit}>
          <input type="text" className="edit" value={text} onChange={this.onLabelChange} />
        </form>
      </li>
    );
  }
}
