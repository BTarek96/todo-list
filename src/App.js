import "./App.css";
import TaskList from "./Components/TaskList";
import { useState } from "react";

function App() {
  /* const [focused, setFocused] = useState(false); */
  const [list, setList] = useState([{ title: "." }]);
  const [value, setValue] = useState("");

  const addTask = (newTask) => {
    const nTask = { title: String(newTask) };
    setList((current) => [...current, nTask]);
    console.log(list);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(event.target.value);
  };

  return (
    <div className="App">
      <h1 className="Title">Todo List</h1>
      <form onSubmit={handleSubmit}>
        <label>New Task</label>
        <div className="inputField">
          <div className="plus"></div>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            className="taskInput"
            placeholder="Enter new task"
          />
        </div>
      </form>
      <TaskList list={list} onAddTask={addTask} />
    </div>
  );
}

export default App;
