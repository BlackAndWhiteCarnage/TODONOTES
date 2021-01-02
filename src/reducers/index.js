import toggleReducer from "./toggle";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  toggle: toggleReducer,
});

export default allReducers;
