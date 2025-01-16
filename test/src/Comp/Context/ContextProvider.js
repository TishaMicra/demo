import React, { useContext, useRef } from "react";
import { contextTheme } from "../../App";

function ContextProvider() {
  //   const { theme, settheme } = useContext(contextTheme);
  const inputref = useRef();
  const focusinput = () => {
    inputref.current.focus();
  };
  return (
    <>
      <div>ContextProvider</div>

      <input ref={inputref} type="text" />
      <button onClick={focusinput}>focus input</button>
      <contextTheme.Consumer>
        {({ theme, settheme, text }) => {
          return (
            <>
              <p>{text}</p>
              <p>{theme}</p>
              <p className={theme ? `container dark` : "container light"}>
                light-dark theme
              </p>
              <button
                // onClick={() => settheme(theme === "light" ? "dark" : "light")}
                onClick={() => settheme(true)}
              >
                dark
              </button>
              <button onClick={() => settheme(false)}>light</button>
            </>
          );
        }}
      </contextTheme.Consumer>
      {/* <p>{theme}</p>
      <button onClick={() => settheme(theme === "light" ? "dark" : "light")}>
        theme
      </button> */}
    </>
  );
}

export default ContextProvider;
