// <================== file to show case the button for the counter ========================>

// importing the required modules
import { useContext } from "react";
import { counterContext } from "./context/counterContext";

const CounterContext = () => {
  const { count } = useContext(counterContext);
  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default CounterContext;
