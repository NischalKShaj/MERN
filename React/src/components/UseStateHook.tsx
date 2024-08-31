// =================== file to demonstrate the working of useState ====================== //

// importing the required modules
import React, { useState } from "react";

// for a simple counter application
const UseStateHook = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        onClick={increment}
        className="mx-2 p-2 bg-blue-500 text-white rounded"
      >
        +
      </button>
      <p className="mx-4 text-xl">{count}</p>
      <button
        onClick={decrement}
        className="mx-2 p-2 bg-red-500 text-white rounded"
      >
        -
      </button>
    </div>
  );
};

export default UseStateHook;

// creating a todo for adding the task in a todo
interface TODO {
  id: number;
  task: string;
  description: string;
}

export const Todo = () => {
  const [tasks, setTasks] = useState<TODO[]>([]);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const changeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "task") {
      setTask(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: TODO = {
      id: Date.now() + Math.random(),
      task: task,
      description: description,
    };

    setTasks([...tasks, newTask]);
    setTask("");
    setDescription("");
  };

  return (
    <div className="bg-amber-500">
      <form onSubmit={handleSubmit}>
        <div className="mt-52 flex flex-col justify-center items-center">
          <input
            className="bg-slate-500 outline-dashed text-white"
            type="text"
            onChange={changeInput}
            id="task"
            value={task}
            name="task"
            required
          />
          <textarea
            onChange={changeInput}
            value={description}
            name="description"
            id="description"
            required
          />
          <button type="submit">submit</button>
        </div>
      </form>

      {tasks.map((task) => (
        <div key={task.id}>
          <p>{task.task}</p>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};
