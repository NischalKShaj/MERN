// <====================== file to demonstrate the use callback ================>

// importing the required modules
import { useCallback, useState } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default UseCallback;
