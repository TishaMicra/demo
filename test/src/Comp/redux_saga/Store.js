import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userSlice from "./Slice";
// import userSaga from "./UserSaga";
import counterSaga from "./UserSaga";

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    api: userSlice,
    // counter : userSlice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(counterSaga);

export default Store;
