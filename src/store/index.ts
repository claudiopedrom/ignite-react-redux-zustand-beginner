import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

// First state slice
// We can have multiple slices, each with their own reducer
const todoSlice = createSlice({
  name: "todo",
  initialState: ["Todo 1", "Todo 2"],

  // Actions that the interface can call
  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo);
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

// Export actions to be used by the interface
export const { add } = todoSlice.actions;

// Add TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
