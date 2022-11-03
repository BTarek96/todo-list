import { Input } from "@mantine/core";
import CheckBox from "./CheckBox";
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
            <CheckBox />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
