import "./App.css";
import TaskList from "./Components/TaskList";
import { useState } from "react";

function App() {
  const [list, setList] = useState([{ title: "." }]);

  const addTask = (newTask) => {
    setList((current) => [...current, newTask]);
  };

  return (
    <div className="App">
      <h1 className="Title">Todo List</h1>
      <TaskList list={list} onAddTask={addTask} />
    </div>
  );
}

export default App;
