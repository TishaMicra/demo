import React from "react";
import { Link } from "react-router-dom";

function Login({ setislogin }) {
  const handlelogin = () => {
    setislogin(true);
  };
  return (
    <>
      <div>Login</div>
      <button onClick={handlelogin}>
        <Link to="/dashboard">Login</Link>
      </button>
    </>
  );
}

export default Login;
