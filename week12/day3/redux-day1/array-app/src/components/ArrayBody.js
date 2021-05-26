import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ArrayBody() {
  const varOne = useSelector((state) => state.varOne);

  const dispatch = useDispatch();

  return (
    <div>
      {varOne.map((varName, index) => (
        <li key={index}>
          {varName.name}
          {varName.name2}
        </li>
      ))}
      <button onClick={() => dispatch({ type: "SWITCH_VAR_ONE" })}>
        Pass it!
      </button>
    </div>
  );
}
