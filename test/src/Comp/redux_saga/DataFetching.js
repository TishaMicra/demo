import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserData,
  fetchUserStart,
  fechUserDataAdd,
  deleteItem,
  updateItem,
} from "./Slice";

function DataList() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.api);
  const [todo, setTodo] = useState([]);
  console.log(user);

  useEffect(() => {
    dispatch(fetchUserStart());
  }, [dispatch]);

  const handlesubmit = () => {
    const newTodo = {
      title: todo,
      id: Date.now(),
    };
    console.log(newTodo);

    dispatch(fechUserDataAdd(newTodo));
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  // const handleUpdate = (id) => {
  //   const updateuser = { id, title: "updateuser", body: "post update" };
  //   dispatch(updateItem({ id, updateuser }));
  //   console.log("update", updateuser);
  // };

  const handleUpdate = (id) => {
    const updateuser = { title: "updated title", body: "updated body" };

    dispatch(updateItem({ id, updateuser }));
    
    console.log("Updated item:", updateuser);
  };

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        style={{ border: "1px solid black" }}
      />
      <button onClick={handlesubmit}>Add</button>
      <div>Data List</div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {user &&
        user.map((i) => {
          return (
            <>
              <p>{i.title}</p>
              <button
                style={{ border: "1px solid black" }}
                onClick={() => handleUpdate(i.id)}
              >
                update
              </button>
              <button
                style={{ border: "1px solid black" }}
                onClick={() => handleDelete(i.id)}
              >
                Delete
              </button>
            </>
          );
        })}
    </>
  );
}

export default DataList;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, setValue } from "./Slice";

// function DataList() {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter.value);

//   useEffect(() => {
//     dispatch(setValue());
//   }, [dispatch]);
//   return (
//     <>
//       <div>Data List</div>
//       <h1>{counter}</h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </>
//   );
// }

// export default DataList;
