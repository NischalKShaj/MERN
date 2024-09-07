// =================== file to demonstrate the working of useState ====================== //

// importing the required modules
import React, { useState } from "react";

// for a simple counter application
const UseStateHook = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default UseStateHook;

interface List {
  id: number;
  task: string;
  description: string;
}

export const Todo = () => {
  const [tasks, setTasks] = useState<List[]>([]);

  const [task, setTask] = useState("");

  const [description, setDescription] = useState("");

  const changeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    if (id === "task") {
      setTask(value);
    } else if (id === "description") {
      setDescription(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: List = {
      id: Math.random() + Date.now(),
      task: task,
      description: description,
    };
    setTasks([...tasks, newTask]);

    setTask("");
    setDescription("");
  };

  return (
    <div>
      <input type="text" id="task" value={task} onChange={changeInput} />
      <textarea
        name="description"
        value={description}
        onChange={changeInput}
        id="description"
      />
      <button onClick={handleSubmit}>submit</button>
      {tasks.map((task) => (
        <div key={task.id}>
          <p>{task.task}</p>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};
