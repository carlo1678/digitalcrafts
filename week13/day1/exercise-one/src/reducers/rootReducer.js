import { combineReducers } from "redux";
import userName from "./userNameReducer";
import email from "./emailReducer";
import userInfo from "./userInfoReducer";

const rootReducer = combineReducers({
  userName,
  email,
  userInfo,
});

export default rootReducer;
