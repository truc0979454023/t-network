import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import theme from "./themeReducer";
import user from "./userReducer";

export default combineReducers({
  auth,
  alert,
  theme,
  user,
});
