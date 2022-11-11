import "./App.css";
import { useState } from "react";
import Task from "./Task";

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

  const taskDelete = (event) => {
    setList(list.filter((task) => task !== event.target.value));
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
      <ul id="tasklist">
        {list.map((task, i) => (
          <div className="taskContainer">
            <Task taskTitle={task} id={i} />
            <button className="deleteTask" onClick={taskDelete} value={task} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
