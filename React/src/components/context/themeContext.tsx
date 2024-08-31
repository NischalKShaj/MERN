// <==================== file to create the counter context ================>

// importing the required modules
import { createContext } from "react";

interface State {
  theme: string;
  toggle: () => void;
}

export const ThemeContext = createContext<State>({
  theme: "light",
  toggle: () => {},
});
