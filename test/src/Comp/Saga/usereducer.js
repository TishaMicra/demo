import {
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
} from "./actions";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function usereducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return { ...state, items: action.payload };
    case GET_ITEMS_FAILURE:
      return { ...state, error: action.error };
    case CREATE_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id == action.payload.id ? { ...item, ...action.payload } : item
        ),
        loading: false,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        loading: false,
      };
    default:
      return state;
  }
}
