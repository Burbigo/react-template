import { call, put, takeEvery } from 'redux-saga/effects';

import { yourAction } from '../api/action';

import {
  YOUR_ACTION_REQUEST,
  yourActionSuccess,
  yourActionFailure,
} from '../actions/action';

function* yourActionSaga(action) {
  try {
    const response = yield call(yourAction, action.payload);
    yield put(yourActionSuccess(response));
  } catch (e) {
    console.log(YOUR_ACTION_REQUEST, e);
    yield put(yourActionFailure());
  }
}

function* watchActionSaga() {
  yield takeEvery(YOUR_ACTION_REQUEST, yourActionSaga);
}

export default watchActionSaga;