// <=================== file to create the slice for counter ==============>

// importing the required modules
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (state: State, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrement: (state: State, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
    reset: (state: State) => {
      state.count = initialState.count;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
