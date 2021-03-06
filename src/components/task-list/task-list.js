import React from 'react';
import PropTypes from 'prop-types';

import Task from '../task/index';

import './task-list.css';

function TaskList({ todos, onDeleted, onCompleted, onEdit, onEdited }) {
  TaskList.defaultProps = {
    todos: [],
    onDeleted: () => {},
    onCompleted: () => {},
    onEdit: () => {},
    onEdited: () => {},
  };

  TaskList.propTypes = {
    todos: PropTypes.instanceOf(Array),
    onDeleted: PropTypes.func,
    onCompleted: PropTypes.func,
    onEdit: PropTypes.func,
    onEdited: PropTypes.func,
  };

  const elements = todos.map((item) => {
    const { id } = item;

    return (
      <Task
        key={id}
        {...item}
        onDeleted={() => onDeleted(id)}
        onCompleted={() => onCompleted(id)}
        onEdit={() => onEdit(id)}
        onEdited={onEdited}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
}

export default TaskList;
