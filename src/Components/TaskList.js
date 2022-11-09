const TaskList = ({ list, onAddTask }) => {
  return (
    <div>
      <ul id="tasklist">
        {list.map((task, i) => (
          <li key={i} className="task">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
