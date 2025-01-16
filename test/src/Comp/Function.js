import React, { useState } from "react";

function Function() {
  const [username, setusername] = useState();
  const [city, setcity] = useState();

  const changlehandle = (e) => {
    setusername(e.target.value);
  };
  const cityhandle = (e) => {
    setcity(e.target.value);
  };
  const handleclick = (e) => {
    // alert(username);
    e.preventDefault();
    console.log("username : " + username);
    console.log("city : " + city);
  };
  return (
    <>
      <div>Function</div>
      <form>
        <input
          type="text"
          value={username}
          onChange={changlehandle}
          name="username"
        />
        <input type="text" value={city} onChange={cityhandle} name="city" />
        <button onClick={handleclick}>click</button>
      </form>
    </>
  );
}

export default Function;
