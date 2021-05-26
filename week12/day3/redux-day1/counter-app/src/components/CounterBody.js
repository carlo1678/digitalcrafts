import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CounterBody() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="counterBody">
      <p>{counter}</p>
      <button className="button" onClick={() => dispatch({ type: "ADD" })}>
        Add
      </button>
      <button className="button" onClick={() => dispatch({ type: "SUBTRACT" })}>
        Subtract
      </button>
    </div>
  );
}
