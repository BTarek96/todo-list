import "./App.css";
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

  const handleClick = (event) => {
    event.currentTarget.classList.toggle("taskDone");
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
          <li key={i} className="task">
            <button onClick={handleClick}></button>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
