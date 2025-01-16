import React, { useState } from "react";
import { addtodo, removetodo, updatetodo } from "./Slice";
import { useDispatch, useSelector } from "react-redux";
function Todo_redux() {
  const [todo, settodo] = useState([]);
  const [updateid, setupdateid] = useState(null);
  const dispatch = useDispatch();
  const handletodo = () => {
    dispatch(addtodo(todo));

    settodo(" ");
  };
  const handledelete = (id) => {
    dispatch(removetodo(id));
  };

  const todolist = useSelector((state) => state.user);
  // console.log(todolist);
  return (
    <>
      <div>Todo_redux</div>
      <input
        type="text"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />
      <button onClick={handletodo}>addtodo</button>

      {todolist.map((i) => {
        return (
          <>
            <ul key={i.id}>
              <li>{i.text}</li>
              <button onClick={() => handledelete(i.id)}>delete</button>
            </ul>
          </>
        );
      })}
    </>
  );
}

export default Todo_redux;
