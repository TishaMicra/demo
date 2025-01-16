import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Todo from "./Todo";
import { Link } from "react-router-dom";

function Home(props) {
  //   const shoot = () => {
  //     alert("great shoot");
  //   };
  // const shoot = (a) => {
  //     alert(a)
  // }
  // const shoot = (a, b) => {
  //   alert(b.type);
  // };
  // const [inputvalue, setinputvalue] = useState();
  // const handlesubmit = (value, e) => {
  //   e.preventDefault();
  //   console.log(value);
  //   setinputvalue(" ");
  // };

  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };
  useEffect(() => {
    console.log("count change");
  }, []);
  // useLayoutEffect(() => {
  //   console.log("uselayouteffect", count)
  // })
  // const prevalue = useRef();

  // useEffect(() => {
  //   prevalue.current = count;
  //   console.log((prevalue.current = count));
  // }, [count]);
  const [todos, settodos] = useState([]);
  const addtodo = useCallback(() => {
    settodos((t) => [...t, "new todo"]);
  }, [todos]);
  // const addtodo =() => {
  //   settodos((t) => [...t, "new todo"]);
  // };

  const calculation = useMemo(() => expensivecalculation(count), [count]);
  // const calculation = expensivecalculation(count);

  return (
    <>
      <div>Home</div>

      {/* <h4>{props.date}</h4> */}
      {/* <button onClick={shoot}>click me</button> */}
      {/* <button onClick={() => shoot("goal")}>click me</button> */}
      {/* <button onClick={(event) => shoot("goal", event)}>click me</button>
      <form onSubmit={(e) => handlesubmit(inputvalue, e)}>
        <h4> {Date()}</h4>
        <input
          type="text"
          placeholder="enter name"
          value={inputvalue}
          onChange={(e) => setinputvalue(e.target.value)}
        />
        <button>click</button>
      </form> */}
      <h5>{count}</h5>
      {/* <p>{prevalue.current}</p> */}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <Todo todo={todos} addtodo={addtodo} />
      <h2>calculation : {calculation}</h2>
      <br />
      <br />
    </>
  );
}

const expensivecalculation = (num) => {
  console.log("calculating...");
  for (let i = 0; i < 100; i++) {
    num += 1;
  }
  return num;
};

export default Home;
