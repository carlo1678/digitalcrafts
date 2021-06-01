import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../actions/userInfo-actions";

export default function InputDisplay() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
  const email = useSelector((state) => state.email);
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <div>
      <div>
        <button onClick={() => setUserInfo(dispatch, userName, email)}>
          Display Info!
        </button>
      </div>
      <h1>Voila, your info is here.</h1>
      <p>{userInfo.userName}</p>
      <p>{userInfo.email}</p>
    </div>
  );
}
