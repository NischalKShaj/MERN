// <============================ file to add the task and description ===============>

import React, { useState } from "react";

interface Todo {
  id: number;
  task: string;
  description: string;
}

const Todo = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState<Todo[]>([]);

  const changeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;
    if (id == "task") {
      setTask(value);
    } else if (id == "description") {
      setDescription(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Todo = {
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
      <input type="text" id="task" onChange={changeInput} value={task} />
      <textarea id="description" onChange={changeInput} value={description} />
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

export default Todo;
