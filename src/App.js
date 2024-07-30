import { useState, useEffect } from "react";
import Input from "./components/input/Input";
import Select from "./components/select/Select";
import TodoList from "./components/todoList/TodoList";

const App = () => {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  const [renderTasks, setRenderTasks] = useState([]);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="todo">
      <Input setTasks={setTasks} tasks={tasks} />
      <Select
        tasks={tasks}
        renderTasks={renderTasks}
        setRenderTasks={setRenderTasks}
      />
      <TodoList tasks={tasks} setTasks={setTasks} renderTasks={renderTasks} />
    </div>
  );
};

export default App;
