import { Input } from "@mantine/core";

const TaskList = ({ list, onAddTask }) => {
  return (
    <div>
      <Input
        className="taskInput"
        placeholder="New Task"
        radius="md"
        size="lg"
      />
      <ul id="tasklist">
        {list.map((task) => (
          <li key={task.title} className="task">
            <input type="checkbox" className="checkbox" />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
