import React from "react";


function Button({ onClick1, onClick2 }) {
  return (
    <>
      <button onClick={onClick1}>click me</button>
      <button onClick={onClick2}>cancle button</button> <br></br>
   
    </>
  );
}

export default Button;
