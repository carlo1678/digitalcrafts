import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function SwitchBody() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const username2 = useSelector((state) => state.username2);

  return (
    <div>
      <p>{username}</p>
      <p>{username2}</p>
      <button onClick={() => dispatch({ type: "CHANGE_USERNAME_TO_JOE" })}>
        Click Me!
      </button>
      <button onClick={() => dispatch({ type: "CHANGE_USERNAME_TO_CARLO" })}>
        Click Me!
      </button>
      <button onclick={() => dispatch({ type: "CLEAR_DATA" })}>Clear</button>
    </div>
  );
}
