// <============================== file to implement todo ===============>

// importing the required module
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  tasks: string[];
}

const initialState: State = {
  tasks: [],
};

const todoSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    addTask: (state: State, action: PayloadAction<string>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = todoSlice.actions;

export default todoSlice.reducer;
