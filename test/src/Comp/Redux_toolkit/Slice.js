// import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "count",
//   initialState: {
//     counter: 0,
//   },
//   reducers: {
//     increment(state) {
//       state.counter += 1;
//     },
//     decrement(state) {
//       state.counter -= 1;
//     },
//     reset(state, action) {
//       state.counter = 0;
//     },
//   },
// });

// export const { increment, decrement, reset } = counterSlice.actions;
// export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addtodo(state, action) {
      state.push({ id: new Date(), text: action.payload });
    },
    removetodo(state, action) {
      return state.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addtodo, removetodo } = TodoSlice.actions;
export default TodoSlice.reducer;
