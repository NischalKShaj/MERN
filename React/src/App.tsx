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
// import { ErrorBoundary } from "react-error-boundary";
// import FallbackComponent from "./components/FallbackComponent";
// import BugComponent from "./components/BugComponent";
// import DropDown from "./components/DropDown";
// import Timer from "./components/Timer";
// import CountUseReducer from "./components/CountUseReducer";
// import DropDownState from "./components/DropDownState";
// import Ref from "./components/Ref";
// import UseCallback from "./components/UseCallback";
// import UseMemo from "./components/UseMemo";
// import LazyWorking from "./components/LazyWorking";
// import ReactMemo from "./components/ReactMemo";
// import CounterRedux from "./components/CounterRedux";
// import ThemeRedux from "./components/ThemeRedux";
import TodoRedux from "./components/TodoRedux";

const App = () => {
  return (
    <div className="flex  justify-center items-center">
      {/* <counterContext.Provider value={{ count, increment, decrement }}>
        <CounterContext />
      </counterContext.Provider> */}
      {/* <ErrorBoundary FallbackComponent={FallbackComponent}>
        <BugComponent />
      </ErrorBoundary> */}
      <TodoRedux />
    </div>
  );
};

export default App;
