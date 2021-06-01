import { SET_EMAIL } from "../action-types/email-action-types";

export const setEmail = (dispatch, email) => {
  return dispatch({ type: SET_EMAIL, payload: email });
};
