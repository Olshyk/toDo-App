import React from "react";

import Task from "../task";

import "./task-list.css";

const TaskList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, className, ...itemProps } = item;

    return (
      <li key={id} className={className}>
        <Task {...itemProps} />
        <input type="text" className="edit" defaultValue="Editing task" />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
