const TaskList = ({ list }) => {
  return (
    <ul id="tasklist">
      {list.map((task) => (
        <li key={task.id} className="task">
          {task.title}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
