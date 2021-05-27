import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  changeFakeDataToJoe,
  changeGovOfficials,
  removeElon,
} from "../actions/greetingActions";

export default function Greeting() {
  const dispatch = useDispatch();
  const fakeData = useSelector((state) => state.fakeData);
  const governmentOfficials = useSelector((state) => state.governmentOfficials);
  return (
    <div>
      <h1>Hello Redux</h1>
      {fakeData.map((data) => (
        <p>{data.userName}</p>
      ))}
      <button onClick={() => changeFakeDataToJoe(dispatch)}>
        Change To Jooooeee
      </button>
      {governmentOfficials.map((govOfficial) => (
        <p>{govOfficial}</p>
      ))}
      <button onClick={() => changeGovOfficials(dispatch)}>Add Senator</button>

      <button onClick={() => removeElon(dispatch)}>Remove The Doge Lord</button>
    </div>
  );
}
