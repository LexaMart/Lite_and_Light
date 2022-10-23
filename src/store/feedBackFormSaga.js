import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { submitFeedBackForm } from "./reducers";
import { setFormVisability } from "./reducers";

function* submitForm(action) {
  const form = action.payload;
  const result = yield axios
    .post(`${process.env.REACT_APP_ENV_URL}submit`, form)
    .catch((e) => console.log(e));
  yield put(setFormVisability(false));
}

function* feedBackFormSaga() {
  yield takeEvery(submitFeedBackForm, submitForm);
}

export default feedBackFormSaga;
