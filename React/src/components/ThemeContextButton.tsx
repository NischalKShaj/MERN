// <============================= file to show the button for the theme context ===========>

import React, { useContext } from "react";
import { themeContext } from "../context/themeContext";

const ThemeContextButton = () => {
  const { toggle } = useContext(themeContext);
  return (
    <div>
      <button onClick={toggle}>change</button>
    </div>
  );
};

export default ThemeContextButton;
