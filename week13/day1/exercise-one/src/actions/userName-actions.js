import { SET_USERNAME } from "../action-types/userName-action-types";

export const setUserName = (dispatch, userName) => {
  return dispatch({ type: SET_USERNAME, payload: userName });
};
