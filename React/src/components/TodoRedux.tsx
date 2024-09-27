// <================================== file to show the todo using redux ===============>

// importing the required modules
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { addTask } from "../redux/slice/todoSlice";

const TodoRedux = () => {
  const { tasks } = useSelector((state: RootState) => state.todo);
  const [task, setTasks] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTask = () => {
    setTasks("");
    dispatch(addTask(task));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    setTasks(target);
  };

  return (
    <div>
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={handleAddTask}>add task</button>

      {tasks.map((task, index) => (
        <li key={index + 1}>{task}</li>
      ))}
    </div>
  );
};

export default TodoRedux;
