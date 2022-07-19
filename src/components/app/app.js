import React, { Component } from 'react';

import './app.css';

import NewTaskForm from '../new-task-form/index';
import TaskList from '../task-list/index';
import Footer from '../footer/index';

export default class App extends Component {
  maxId = 0;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make App'),
      this.createTodoItem('Have A Lunch'),
    ],
    filter: 'all',
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  onCompleted = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'completed'),
      };
    });
  };

  onEdit = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'editing'),
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  editItem = (text, id) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

      return {
        todoData: newArr,
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((item) => !item.completed),
      };
    });
  };

  toggleProperty(array, id, propName) {
    return array.reduce((acc, cur) => {
      const newItem = { ...cur };
      if (cur.id === id) newItem[propName] = !cur[propName];
      acc.push(newItem);
      return acc;
    }, []);
  }

  filter(items, filter) {
    switch (filter) {
      // eslint-disable-next-line indent
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.completed);
      case 'completed':
        return items.filter((item) => item.completed);
      default:
        return items;
    }
  }

  createTodoItem(label) {
    return {
      label,
      completed: false,
      editing: false,
      id: this.maxId++,
    };
  }

  render() {
    const { todoData, filter } = this.state;
    const completed = todoData.filter((item) => item.completed);
    const todoCount = todoData.length - completed.length;
    const filtered = this.filter(todoData, filter);

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onAdded={this.addItem} />
        </header>
        <section className="main">
          <TaskList
            todos={filtered}
            onDeleted={this.deleteItem}
            onCompleted={this.onCompleted}
            onEdit={this.onEdit}
            onEdited={this.editItem}
          />
          <Footer
            toDo={todoCount}
            clearCompleted={this.clearCompleted}
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </section>
      </section>
    );
  }
}
