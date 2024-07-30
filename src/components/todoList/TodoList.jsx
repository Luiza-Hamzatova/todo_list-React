const TodoList = ({ renderTasks, setTasks, tasks }) => {
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id
          ? {
              ...task,
              isCompleted: !task.isCompleted,
            }
          : task
      )
    );
  };
  return (
    <ul className="todo__items">
      {renderTasks.map(({ value, date, isCompleted, id }) => (
        <li className={`todo__item ${isCompleted ? "completed" : ""}`} key={id}>
          <span className="todo__task">
            <span>{value}</span>
            <span className="todo__date">{date}</span>
          </span>
          <span
            className="todo__action todo__action_delete"
            onClick={() => deleteTask(id)}
          ></span>
          <span
            className="todo__action todo__action_complete"
            onClick={() => completeTask(id)}
          ></span>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
