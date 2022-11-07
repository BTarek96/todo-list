const TaskList = ({ list, onAddTask }) => {
  return (
    <div>
      <ul id="tasklist">
        {list.map((task) => (
          <li key={task.title} className="task">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
