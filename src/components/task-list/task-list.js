import React from "react";

import Task from "../task";

import "./task-list.css";

const TaskList = ({ todos, onDeleted }) => {
  const elements = todos.map((item) => {
    const { id } = item;

    return <Task key={id} {...item} onDeleted={() => onDeleted(id)} />;
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
