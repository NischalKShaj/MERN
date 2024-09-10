// <================== file to show the theme =================>

import { useContext } from "react";
import { themeContext } from "../context/themeContext";

const ThemeContext = () => {
  const { theme } = useContext(themeContext);
  return (
    <div>
      <p
        style={{
          background: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        click and change color
      </p>
    </div>
  );
};

export default ThemeContext;
