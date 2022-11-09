import "./App.css";
import TaskList from "./Components/TaskList";
import { useState } from "react";

function App() {
  /* const [focused, setFocused] = useState(false); */
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const saveTask = (event) => {
    setInput(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    const copiedList = [...list];
    copiedList.push(input);
    setList(copiedList);
    setInput("");
  };

  return (
    <div className="App">
      <h1 className="Title">Todo List</h1>
      <form onSubmit={addTask}>
        <label>New Task</label>
        <div className="inputField">
          <div className="plus"></div>
          <input
            type="text"
            value={input}
            onChange={saveTask}
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
