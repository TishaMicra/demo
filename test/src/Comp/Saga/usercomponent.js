import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ITEMS, UPDATE_ITEM, CREATE_ITEM, DELETE_ITEM } from "./actions";

const Usercomponent = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  console.log("first", items);
  const error = useSelector((state) => state.error);

  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    dispatch({ type: GET_ITEMS });
  }, [dispatch]);

  const handleCreate = () => {
    dispatch({
      type: CREATE_ITEM,
      payload: { id: Date.now(), title: newItem, completed: false },
    });
    setNewItem("");
    console.log(newItem);
  };

  const handleUpdate = (id) => {
    const updateuser = { id, title: "updateuser", body: "post update" };
    dispatch({ type: UPDATE_ITEM, payload: { id, updateuser } });
    console.log("update", updateuser);
  };

  const handleDelete = (id) => {
    dispatch({ type: DELETE_ITEM, payload: id });
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={handleCreate}>Add Item</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <button
              onClick={() => handleUpdate(item.id)}
              style={{ border: "1px solid black" }}
            >
              update
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              style={{ border: "1px solid black" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Usercomponent;
