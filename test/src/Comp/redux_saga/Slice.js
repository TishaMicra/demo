import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [{}],
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    fetchUserStart: (state) => {
      state.loading = true;
    },
    fetchUserDataSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload || [];
    },
    fetchUserDataFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    fechUserDataAdd: (state, action) => {
      state.user = [...state.user, action.payload];
      state.loading = false;
    },
    deleteItem: (state, action) => {
      state.user = state.user.filter((item) => item.id !== action.payload);
      state.loading = false;
    },

    updateItem: (state, action) => {
      state.user = state.user.map((item) =>
        item.id == action.payload.id ? { ...item, ...action.payload } : item
      );
      state.loading = false;
    },
  },
});

export const {
  fetchUserStart,
  fetchUserDataSuccess,
  fetchUserDataFailure,
  fechUserDataAdd,
  deleteItem,
  updateItem,
} = userSlice.actions;
export default userSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },

//     decrement: (state) => {
//       state.value -= 1;
//     },
//     setValue: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });

// export const { increment, decrement, setValue } = counterSlice.actions;
// export default counterSlice.reducer;
