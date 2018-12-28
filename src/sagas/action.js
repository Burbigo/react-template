import { call, put, takeEvery } from 'redux-saga/effects';

import { doSomeAction } from 'api/action';

import {
  YOUR_ACTION_REQUEST,
  yourActionSuccess,
  yourActionFailure,
} from 'actions/action';

function* doSomethingSaga(action) {
  try {
    const response = yield call(doSomeAction, action.payload);
    yield put(yourActionSuccess(response));
  } catch (e) {
    console.log(YOUR_ACTION_REQUEST, e);
    yield put(yourActionFailure());
  }
}

function* watchRatesSaga() {
  yield takeEvery(YOUR_ACTION_REQUEST, doSomethingSaga);
}

export default watchRatesSaga;