import "./app.css";

import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";
import Footer from "../footer";

const App = () => {
  const date1 = new Date();
  const date2 = new Date();
  const date3 = new Date();
  const todoData = [
    {
      label: "Completed task",
      created: date1,
      className: "completed",
      id: 1,
    },
    { label: "Editing task", created: date2, className: "editing", id: 2 },
    { label: "Active task", created: date3, className: null, id: 3 },
  ];

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList todos={todoData} />
        <Footer toDo={1} />
      </section>
    </section>
  );
};

export default App;
