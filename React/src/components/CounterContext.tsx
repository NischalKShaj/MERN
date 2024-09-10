// <================= file to show the context for the counter ===========>

import { useContext } from "react";
import { counterContext } from "../context/counterContext";

const CounterContext = () => {
  const { count, increment, decrement } = useContext(counterContext);
  return (
    <div>
      <button onClick={increment}>increment</button>
      <p>{count}</p>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default CounterContext;
