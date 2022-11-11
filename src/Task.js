import { useState } from "react";

const Task = ({ taskTitle, id }) => {
  const [isDone, setIsDone] = useState(false);

  const handleClick = (event) => {
    event.currentTarget.classList.toggle("taskDone");
    setIsDone((current) => !current);
  };

  return (
    <li key={id} className={isDone ? "task completed" : "task"}>
      <button className="taskFinish" onClick={handleClick}></button>
      {taskTitle}
    </li>
  );
};

export default Task;
