// <========================= file to implement the counter application with the redux===============>

// importing the required modules
import { AppDispatch, RootState } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/slice/counterSlice";

const CounterRedux = () => {
  const { count } = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch<AppDispatch>();

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <p>count{count}</p>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default CounterRedux;
