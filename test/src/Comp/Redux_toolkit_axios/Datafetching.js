import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserListingData } from "./Slice";

function Datafetching() {
  const dispatch = useDispatch();

  const { userListData } = useSelector((state) => state.user);
 
  const [userListArray, setUserListArray] = useState([]);
  console.log(userListArray);
  useEffect(() => {
    setUserListArray(userListData);
  }, [userListData]);


  useEffect(() => {
    dispatch(UserListingData())
  },[])
  return (
    <>
      <div>Datafetching</div>
    </>
  );
}

export default Datafetching;
