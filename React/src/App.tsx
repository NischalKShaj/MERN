// import { useState } from "react";
// import Todo from "./components/Todo";
// import UseEffect from "./components/UseEffect";
// import Counter from "./components/Counter";
// import { counterContext } from "./context/counterContext";
// import CounterContext from "./components/CounterContext";
// import { themeContext } from "./context/themeContext";
// import ThemeContext from "./components/ThemeContext";
// import ThemeContextButton from "./components/ThemeContextButton";
// import PropsPass from "./components/PropsPass";

import { ErrorBoundary } from "react-error-boundary";
import FallbackComponent from "./components/FallbackComponent";
import BugComponent from "./components/BugComponent";

// import DropDown from "./components/DropDown";

const App = () => {
  return (
    <div className="flex  justify-center items-center">
      {/* <themeContext.Provider value={{ theme, toggle }}>
        <ThemeContext />
        <ThemeContextButton />
      </themeContext.Provider> */}
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <BugComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;
