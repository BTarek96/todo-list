import { Input } from "@mantine/core";

const TaskList = ({ list, onAddTask }) => {
  return (
    <div>
      <Input
        className="taskInput"
        placeholder="New Task"
        radius="md"
        size="md"
      />
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
