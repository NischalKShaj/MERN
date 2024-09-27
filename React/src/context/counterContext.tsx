// <============================== file to demonstrate the context ==================>

import { createContext } from "react";

interface Counter {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const counterContext = createContext<Counter>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});
