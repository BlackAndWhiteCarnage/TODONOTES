import { combineReducers } from "redux";
import toggleReducer from "./toggle";
import toggleDarkMode from "./darkMode";

const allReducers = combineReducers({
  toggle: toggleReducer,
  toggleDarkMode: toggleDarkMode,
});

export default allReducers;
