// <=========== file for changing the theme of a text using the redux ===============>

// importing the required modules
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { toggle } from "../redux/slice/themeSlice";

const ThemeRedux = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch<AppDispatch>();
  const handleToggle = () => {
    dispatch(toggle());
  };
  return (
    <div>
      <p
        style={{
          color: theme === "light" ? "black" : "white",
          background: theme === "light" ? "white" : "black",
        }}
      >
        click to change
      </p>

      <button onClick={handleToggle}>change</button>
    </div>
  );
};

export default ThemeRedux;
