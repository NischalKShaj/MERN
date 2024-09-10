// <================= file to create the context for the theme ========================>

import { createContext } from "react";

interface State {
  theme: string;
  toggle: () => void;
}

export const themeContext = createContext<State>({
  theme: "light",
  toggle: () => {},
});
