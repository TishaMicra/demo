import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import _ from "lodash";

const initialstate = {
  isLoading: false,
  isError: false,
  userListData: null,
};

export const UserListingData = () => async (dispatch) => {
  try {
    dispatch(UserSetState([{ key: "isLoading", value: true }]));

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log("response", response);
    if (response) {
      dispatch(
        UserSetState([
          { key: "isLoading", value: true },
          { key: "userListData", value: response?.data },
        ])
      );
    }
    return response;
  } catch (error) {
    dispatch(
      UserSetState([
        {
          key: "isError",
          value: error?.response?.error.message,
        },
      ])
    );
  }
};
const UserData = createSlice({
  name: "User",
  initialState: initialstate,
  reducers: {
    UserSetState(state, { payload }) {
      if (Array.isArray(payload)) {
        for (const obj of payload) {
          _.set(state, obj.key, obj.value);
        }
      } else {
        _.set(state, payload.key, payload.value);
      }
    },
  },
});
export const { UserSetState } = UserData.actions;
export default UserData.reducer;
