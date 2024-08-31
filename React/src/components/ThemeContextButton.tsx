// <================== file to show case the button for the counter ========================>

// importing the required modules
import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";

const ThemeContextButton = () => {
  const { toggle } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggle}>change theme</button>
    </div>
  );
};

export default ThemeContextButton;
