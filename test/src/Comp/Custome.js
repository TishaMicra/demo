import React, { useEffect, useState } from "react";

function Custome(url) {
  const [data, setdata] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setdata(d));
  }, [url]);

  return [data];
}

export default Custome;
