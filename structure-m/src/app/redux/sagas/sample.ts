import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchSample(action: any) {
  try {
    // do API call to backend
    yield put({ type: "SAMPLE_FETCH_SUCCEEDED", batch: "new_batch" });
  } catch (e) {
    yield put({ type: "SAMPLE_FETCH_FAILED", message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* sampleSaga() {
  yield takeLatest("SAMPLE_FETCH_REQUESTED", fetchSample);
}

export default sampleSaga;
