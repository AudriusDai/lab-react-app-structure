import { combineReducers } from "redux";
import { default as sample } from "./sample";
import { default as example } from "./example";

export default combineReducers({
  sample,
  example,
});
