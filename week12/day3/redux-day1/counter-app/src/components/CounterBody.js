import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, subtractCounter } from "../actions/counterActions";

export default function CounterBody() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="counterBody">
      <p>{counter}</p>
      <button className="button" onClick={() => addCounter(dispatch)}>
        Add
      </button>
      <button className="button" onClick={() => subtractCounter(dispatch)}>
        Subtract
      </button>
    </div>
  );
}
