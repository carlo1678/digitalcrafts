import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { insertArray } from "../actions/arrayActions";

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
      <button onClick={() => insertArray(dispatch)}>Pass it!</button>
    </div>
  );
}
