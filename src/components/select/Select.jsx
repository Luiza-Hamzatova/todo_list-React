import { useEffect, useState } from "react";

const Select = ({ tasks, renderTasks, setRenderTasks }) => {
  const [filter, setFilter] = useState("all");
  const filterTasks = (filter) => {
    if (filter === "active") {
      setRenderTasks(tasks.filter((task) => !task.isCompleted));
    } else if (filter === "completed") {
      setRenderTasks(tasks.filter((task) => task.isCompleted));
    } else {
      setRenderTasks(tasks);
    }
  };
  useEffect(() => {
    filterTasks(filter);
  }, [filter]);
  useEffect(() => {
    setRenderTasks(tasks);
    filterTasks(filter);
  }, [tasks]);

  return (
    <select
      className="todo__options"
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="all">Все</option>
      <option value="active">Активные</option>
      <option value="completed">Завершённые</option>
    </select>
  );
};

export default Select;
