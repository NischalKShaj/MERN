import "./App.css";
// import CounterButtonContext from "./components/CounterButtonContext";
// import CounterContext from "./components/CounterContext";
// import { counterContext } from "./components/context/counterContext";
import { useState } from "react";
import { ThemeContext } from "./components/context/themeContext";
import ThemeContextButton from "./components/ThemeContextButton";
import ThemeContextText from "./components/ThemeContextText";
// import { Todo } from "./components/UseStateHook";
// import UseStateHook from "./components/UseStateHook";
// import { ErrorBoundary } from "react-error-boundary";
// import ErrorBoundaryComponent from "./components/ErrorBoundaryComponent";
// import BuggyComponent from "./components/BuggyComponent";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggle }}>
        <ThemeContextText />
        <ThemeContextButton />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
