// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./Slice";

// const Store = configureStore({
//   reducer: {
//     count: counterReducer,
//   },
// });
// export default Store;
import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./Slice";

const Store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
});
export default Store;
