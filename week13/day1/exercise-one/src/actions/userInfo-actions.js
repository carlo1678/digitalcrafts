import { SET_USERINFO } from "../action-types/userInfo-action-types";

export const setUserInfo = (dispatch, userName, email) => {
  return dispatch({ type: SET_USERINFO, payload: { userName, email } });
};
