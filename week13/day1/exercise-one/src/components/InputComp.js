import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../actions/userName-actions.js";
import { setEmail } from "../actions/email-actions";

export default function InputComp() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
  const email = useSelector((state) => state.email);

  return (
    <div>
      <h1>Hello! Welcome to my App!</h1>
      <h3>Input your desired UserName and E-mail below!</h3>
      <form type="submit">
        <input
          type="text"
          placeholder="Type UserName here!"
          value={userName}
          onChange={(e) => setUserName(dispatch, e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Type E-Mail here!"
          value={email}
          onChange={(e) => setEmail(dispatch, e.target.value)}
        ></input>
      </form>
    </div>
  );
}
