import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ArrayBody() {
  const varOne = useSelector((state) => state.varOne);

  const dispatch = useDispatch();

  return (
    <div>
      {varOne.map((varName) => (
        <p>{varName.name}</p>
      ))}
      <button onClick={() => dispatch({ type: "SWITCH_VAR_ONE" })}>
        Pass it!
      </button>
    </div>
  );
}
