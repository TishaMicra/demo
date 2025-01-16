import React, { memo } from "react";

function Todo({ todo, addtodo }) {
  console.log("child render");
  return (
    <>
      <div>Todo</div>
      <p>{todo}</p>
      <button onClick={addtodo}>addtodo</button>
    </>
  );
}

export default memo(Todo);
