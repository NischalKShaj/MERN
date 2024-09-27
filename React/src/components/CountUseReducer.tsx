// <============================== file to demonstrate the useReducer ======================>

// importing the required modules
import { useReducer } from "react";

interface State {
  count: number;
}
const initialState: State = { count: 0 };

type Action = { type: "increment" } | { type: "decrement" };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
};

const CountUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
};

export default CountUseReducer;
