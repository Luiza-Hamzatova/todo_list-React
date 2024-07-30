import { useEffect, useState } from "react";

const Input = ({ tasks, setTasks }) => {
  const [value, setValue] = useState("");
  const [id, setId] = useState(
    localStorage.getItem("id") ? JSON.parse(localStorage.getItem("id")) : 0
  );
  const getTaskValue = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        value,
        id,
        date: new Date().toLocaleString(),
        isCompleted: false,
      },
    ]);
    setId(id + 1);
  };

  return (
    <div className="todo__input">
      <input
        className="todo__text"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="todo__add" onClick={getTaskValue}></button>
    </div>
  );
};

export default Input;
