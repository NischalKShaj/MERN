// <============================== file to demonstrate the context ==================>

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
