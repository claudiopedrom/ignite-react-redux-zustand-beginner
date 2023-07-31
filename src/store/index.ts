import { configureStore, createSlice } from "@reduxjs/toolkit";

// First state slice
// We can have multiple slices, each with their own reducer
const todoSlice = createSlice({
  name: "todo",
  initialState: ["Todo 1", "Todo 2"],
  reducers: {},
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
