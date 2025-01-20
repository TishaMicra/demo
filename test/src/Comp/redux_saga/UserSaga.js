import axios from "axios";
import {
  fetchUserDataFailure,
  fetchUserDataSuccess,
  fetchUserStart,
  fechUserDataAdd,
  deleteItem,
  updateItem
} from "./Slice";
import { call, put, select, takeEvery } from "redux-saga/effects";

const fetchApiData = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
};

const fetchApiAddData = async (item) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    item
  );
  return response.data;
};
const deleteDataApi = async (id) => {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return id;
};

const updateApi = async (id, item) => {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    item
  );
  return response.data;
};

function* fetchUserData() {
  try {
    const data = yield call(fetchApiData);

    console.log(data);
    yield put(fetchUserDataSuccess(data));
  } catch (error) {
    yield put(fetchUserDataFailure(error.message));
  }
}

function* addUserData(action) {
  try {
    const data = yield call(fetchApiAddData, action.payload);
    const existingData = yield select((state) => state.api.user);
    yield put(fetchUserDataSuccess([...existingData, data]));
  } catch (error) {
    yield put(fetchUserDataFailure(error.message));
  }
}

function* deleteData(action) {
  try {
    yield call(deleteDataApi, action.payload);
    const existingData = yield select((state) => state.api.user);
    yield put(fetchUserDataSuccess([...existingData, action.payload]));
  } catch (error) {
    yield put(fetchUserDataFailure(error));
  }
}
function* updatedata(action) {
  try {
    const { id, updatedItem } = action.payload;
    const response = yield call(updateItem, id,updatedItem);
    yield put(fetchUserDataSuccess(response));
  } catch (error) {
    yield put(fetchUserDataFailure(error));
    console.error("Delete item error:", error);
  }
}

function* userSaga() {
  yield takeEvery(fetchUserStart.type, fetchUserData);
  yield takeEvery(fechUserDataAdd.type, addUserData);
  yield takeEvery(deleteItem.type, deleteData);
  yield takeEvery(updateItem.type, updatedata);
}

export default userSaga;

// import { call, put, takeEvery } from "redux-saga/effects";
// import { setValue } from "./Slice";
// import axios from "axios";

// function* fetchCounterValue() {
//   try {
//     const value = yield call(
//       () => new Promise((resolve) => setTimeout(() => resolve(10), 1000))
//     );
//     yield put(setValue(value));
//   } catch (error) {
//     console.log("Error", error);
//   }
// }
// function* counterSaga() {
//   yield takeEvery("counter/setValue", fetchCounterValue);
// }

// export default counterSaga;
