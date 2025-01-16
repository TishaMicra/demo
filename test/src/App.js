import logo from "./logo.svg";
import "./App.css";

import React from "react";
import Home from "./Comp/Home";
import Button from "./Comp/Button";
import Axios_file from "./Comp/Axios_file";
import Class from "./Comp/Class";
import Function from "./Comp/Function";
import ContextProvider from "./Comp/Context/ContextProvider";
import { createContext, lazy, useId, useState } from "react";
import Reducer from "./Comp/Reducer";
import DataFetching from "./Comp/DataFetching";
import Route_File from "./Comp/Route_File";
import Tailwind_file from "./Comp/Tailwind_file";
import Query_file from "./Comp/Query_file";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Infinity_query from "./Comp/Infinity_query";

const LazyComponent = React.lazy(() => import("../src/Comp/Todo"));

export const contextTheme = createContext();

function App() {
  const handleclick = () => {
    alert("click butoon");
  };
  const handlecancle = () => {
    alert("cancle");
  };

  // const [theme, settheme] = useState("light");
  const [theme, settheme] = useState(false);
  // const toggletheme = () => {
  //   settheme(!theme);
  // };

  // const text = "hello";

  // const id1 = useId();
  // const id2 = useId();
  const queryClient = new QueryClient();

  return (
    <div className="App">
      {/* <p>the id : {id1}</p>
      <p>the id: {id2}</p> */}
      {/* <contextTheme.Provider value={{ theme, settheme,text }}> */}
      {/* <contextTheme.Provider value={{ theme, toggletheme, settheme }}> */}
      {/* <contextTheme.Provider value={{ theme, settheme }}>
        <ContextProvider />
      </contextTheme.Provider> */}

      {/* <Home date={Date()} /> */}

      {/* <Button onClick1={handleclick} onClick2={handlecancle} /> */}
      {/* <Class /> */}
      {/* <Function/> */}
      {/* <Axios_file /> */}
      {/* <Reducer /> */}
      {/* <DataFetching /> */}
      <Route_File />
      {/* <Tailwind_file /> */}

      {/* <QueryClientProvider client={queryClient}>
        {/* <Query_file /> 
        <Infinity_query />
      </QueryClientProvider> */}
      {/* <React.Suspense fallback={<div>loading...</div>}>
        <LazyComponent />
      </React.Suspense> */}
    </div>
  );
}

export default App;
