// <================== file to show case the button for the counter ========================>

// importing the required modules
import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";

const ThemeContextText = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <p
        style={{
          background: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        change the theme by clicking
      </p>
    </div>
  );
};

export default ThemeContextText;
