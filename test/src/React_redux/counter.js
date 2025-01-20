import React from "react";
import { increment, decrement, reset } from "./action";
import { useDispatch, useSelector } from "react-redux";
function Counter() {
  const dispatch = useDispatch();
  const counterlist = useSelector((state) => state);

  console.log(counterlist);
  return (
    <>
      <div>counter</div>
      <h6>{counterlist}</h6>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}

export default Counter;
