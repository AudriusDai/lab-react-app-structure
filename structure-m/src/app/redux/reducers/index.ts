import { combineReducers } from "redux";
import { default as samples } from "./sample";
import { default as examples } from "./example";

export default combineReducers({
  samples,
  examples,
});
