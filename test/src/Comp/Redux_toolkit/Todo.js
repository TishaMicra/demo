import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement, reset } from "./Slice";
import { addtodo, removetodo } from "./Slice";

const Todo = () => {
  const dispatch = useDispatch();
  // const counter = useSelector(state => state.count.counter);
  const [todo, setTodo] = useState([]);

  const todolist = useSelector((state) => state.todo);
  console.log(todolist);

  const handleSubmit = () => {
    dispatch(addtodo(todo));
    setTodo("");
  };

  const handledelete = (id) => {
    dispatch(removetodo(id));
  };

  return (
    <div>
      {/* <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button> */}

      <h4>Todo List</h4>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        style={{ border: "1px solid black" }}
      />
      <button onClick={() => handleSubmit()}>Add Todo</button>

      {todolist.map((i, index) => (
        <>
          <div style={{ display: "flex", gap: "6px", padding: "2px" }}>
            <p>{i.text}</p>
            <button
              style={{ border: "2px solid black" }}
              onClick={() => handledelete(i.id)}
            >
              Delete
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default Todo;
