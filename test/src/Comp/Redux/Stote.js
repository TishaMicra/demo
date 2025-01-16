import { configureStore } from "@reduxjs/toolkit";
import addtodolist from "./Slice";
const Store = configureStore({
  reducer: {
    user: addtodolist,
  },
});
export default Store;
