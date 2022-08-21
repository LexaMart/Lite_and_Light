import {call, put, takeEvery} from 'redux-saga/effects';
import { submitFeedBackForm } from './reducers';

function* submitForm(action) {
    const form = action.payload;
    yield console.log(form);
}

function* feedBackFormSaga() {
    yield takeEvery(submitFeedBackForm, submitForm)
}

export default feedBackFormSaga