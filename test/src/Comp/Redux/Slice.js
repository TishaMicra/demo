import { createSlice } from "@reduxjs/toolkit";

const addtodolist = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addtodo(state, action) {
      state.push({
        id: Date.now(),
        text: action.payload,
      });
    },
    removetodo(state, action) {
      return state.filter((i) => i.id !== action.payload);
    },
  },
});
export const { addtodo, removetodo } = addtodolist.actions;
export default addtodolist.reducer;
