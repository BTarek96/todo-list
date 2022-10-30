import "./App.css";
import TaskList from "./Components/TaskList";
import { useState } from "react";

function App() {
  const [list, setList] = useState([{ id: 1, title: "numero uno" }]);
  return (
    <div className="App">
      <h1 className="Title">Todo List</h1>
      <TaskList list={list} />
    </div>
  );
}

export default App;
