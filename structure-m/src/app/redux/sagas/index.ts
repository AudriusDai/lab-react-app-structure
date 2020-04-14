import { all } from "redux-saga/effects";
import sampleSaga from "./sample";
import exampleSaga from "./example";

export default function* rootSaga() {
  yield all([sampleSaga(), exampleSaga()]);
  // code after all-effect
}
