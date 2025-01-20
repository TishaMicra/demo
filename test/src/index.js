import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Store from "./Comp/Redux/Stote";
// import Store from "./Comp/Redux_toolkit/store";
// import store from "./React_redux/store";
// import Store from "./Comp/Redux_toolkit_axios/Store";
import { Provider } from "react-redux";
import Store from "./Comp/redux_saga/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={Store}>
      <App Text="hello world" />
    </Provider> */}
    {/* <Provider store={store}>
      <App Text="hello world" />
    </Provider> */}
    {/* <Provider store={Store}>
      <App Text="hello world" />
    </Provider> */}
    <Provider store={Store}>
      <App Text="hello world" />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import store from "./Comp/Saga/store";
// import { Provider } from "react-redux";

// import Usercomponent from "./Comp/Saga/usercomponent";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Usercomponent />
//     </Provider>
//   </React.StrictMode>
// );

// reportWebVitals();
