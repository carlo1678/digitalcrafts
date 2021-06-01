import { SET_USERNAME } from "../action-types/userName-action-types";

const initialState = "";

const userName = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return (state = action.payload);
    default:
      return state;
  }
};

export default userName;
