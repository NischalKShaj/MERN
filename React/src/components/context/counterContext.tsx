// <==================== file to create the counter context ================>

// importing the required modules
import { createContext } from "react";

interface State {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const counterContext = createContext<State>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});
