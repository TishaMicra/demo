import React from "react";
import Custome from "./Custome";
import { Link, Outlet } from "react-router-dom";

function DataFetching() {
  const [data] = Custome("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      <div>
        <Link to="/datafetching/home">Home</Link>
      </div>
      <Outlet />
      <div>DataFetching</div>
      {data &&
        data.map((i) => {
          return (
            <>
              <p key={i.id}>{i.title}</p>
            </>
          );
        })}
    </>
  );
}

export default DataFetching;
