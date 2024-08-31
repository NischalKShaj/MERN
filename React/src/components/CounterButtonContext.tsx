// <================== file to show case the button for the counter ========================>

// importing the required modules
import { useContext } from "react";
import { counterContext } from "./context/counterContext";

const CounterButtonContext = () => {
  const { increment, decrement } = useContext(counterContext);
  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default CounterButtonContext;
