// <======================= file to create a theme slice ==============>

// importing the required modules
import { createSlice } from "@reduxjs/toolkit";

interface State {
  theme: string;
}

const initialState: State = {
  theme: "light",
};

const themeSlice = createSlice({
  initialState,
  name: "theme",
  reducers: {
    toggle: (state: State) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
