import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import DataFetching from "./DataFetching";
import Reducer from "./Reducer";
import Home from "./Home";
import Todo_redux from "./Redux/Todo_redux";
import Todo from "./Redux_toolkit/Todo";
import Counter from "../React_redux/counter";
import Datafetching from "./Redux_toolkit_axios/Datafetching";
function Route_File() {
  return (
    <>
      <BrowserRouter>
        {/* <nav>
          <Link to="/">reducer</Link>
          <Link to="datafetching">datafetching</Link>
        </nav> */}
        <Routes>
          {/* <Route path="/" element={<Reducer />} />
          <Route path="/datafetching" element={<DataFetching />}>
            <Route path="home" element={<Home />} />
          </Route> */}
          {/* <Route path="/datafetching/:id" element={<DataFetching />}></Route> */}
          {/* <Route path="/" element={<Todo_redux/>}/> */}
          {/* <Route path="/" element={<Todo/>}/> */}
          {/* <Route path="/" element={<Counter />} /> */}
          {/* <Route path="/" element={<Datafetching />} /> */}
    
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Route_File;

// import React, { lazy, Suspense } from "react";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// const DataFetching = lazy(() => import("./DataFetching"));
// const Reducer = lazy(() => import("./Reducer"));
// function Route_File() {
//   return (
//     <>
//       <BrowserRouter>
//         <nav>
//           <Link to="/">DataFetching</Link>
//           <Link to="reducer">Reducer</Link>
//         </nav>
//         <Suspense>
//           <Routes>
//             <Route path="/" element={<DataFetching />} />
//             <Route path="reducer" element={<Reducer />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </>
//   );
// }

// export default Route_File;

// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
// import Login from "./Protected/Login";
// import Register from "./Protected/Register";
// import Dashboard from "./Protected/Dashboard";

// const ProtectedRoute = ({ element, islogin }) => {
//   return islogin ? element : <Navigate to="/" />;
// };
// function Route_File() {
//   const [islogin, setislogin] = useState(false);
//   return (
//     <>
//       <BrowserRouter>
//         <nav>
//           <ul style={{ listStyle: "none", display: "flex" }}>
//             <li style={{ padding: "2px" }}>
//               <Link to="/">Login</Link>
//             </li>
//             <li style={{ padding: "2px" }}>
//               <Link to="/register">Register</Link>
//             </li>
//             <li style={{ padding: "2px" }}>
//               <Link to="/dashboard">Dashboard</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Login setislogin={setislogin} />} />
//           <Route path="register" element={<Register />} />
//           <Route
//             path="dashboard"
//             element={
//               <ProtectedRoute element={<Dashboard />} islogin={islogin} />
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default Route_File;
