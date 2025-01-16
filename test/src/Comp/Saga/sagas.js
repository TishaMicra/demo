import { call, put, takeEvery } from "redux-saga/effects";
import {
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  GET_ITEMS_FAILURE,
  GET_ITEMS_SUCCESS,
  CREATE_ITEM_FAILURE,
  CREATE_ITEM_SUCCESS,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  UPDATE_ITEM_FAILURE,
  UPDATE_ITEM_SUCCESS,
  GET_ITEMS,
} from "./actions";
import axios from "axios";

const fetchItems = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
};

const createItem = async (item) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    item
  );
  return response.data;
};

const updateItem = async (id, item) => {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    item
  );
  return response.data;
};

const deleteItem = async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return id;
};

function* fetchItemsSaga() {
  try {
    const response = yield call(fetchItems);
    yield put({ type: GET_ITEMS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: GET_ITEMS_FAILURE, error });
    console.error("Fetch items error:", error);
  }
}

function* createItemSaga(action) {
  try {
    const response = yield call(createItem, action.payload);
    yield put({ type: CREATE_ITEM_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: CREATE_ITEM_FAILURE, error });
    console.error("Create item error:", error);
  }
}

function* updateItemSaga(action) {
  try {
    const { id, updatedItem } = action.payload;
    const response = yield call(updateItem, id);
    yield put({ type: UPDATE_ITEM_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: UPDATE_ITEM_FAILURE, error });
    console.error("Delete item error:", error);
  }
}

function* deleteItemSaga(action) {
  try {
    yield call(deleteItem, action.payload);
    yield put({ type: DELETE_ITEM_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_ITEM_FAILURE, error });
    console.error("Delete item error:", error);
  }
}

function* rootSaga() {
  yield takeEvery(GET_ITEMS, fetchItemsSaga);
  yield takeEvery(CREATE_ITEM, createItemSaga);
  yield takeEvery(UPDATE_ITEM, updateItemSaga);
  yield takeEvery(DELETE_ITEM, deleteItemSaga);
}

export default rootSaga;
