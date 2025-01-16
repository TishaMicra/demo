import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
function reducer(state, action) {
  if (action.type === "increment") {
    return {
      initialvalue: state.initialvalue + 1,
    };
  } else if (action.type === "decrement") {
    return {
      initialvalue: state.initialvalue - 1,
    };
  } else if (action.type === "reset") {
    return {
      initialvalue: 0,
    };
  }
}
function Reducer() {
  const [state, dispatch] = useReducer(reducer, { initialvalue: 0 });
  // const navigate = useNavigate();
  return (
    <>
      {/* <button onClick={() => navigate("/datafetching")}>Navigate</button> */}

      <div>Reducer</div>
      <h4>{state.initialvalue}</h4>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default Reducer;
