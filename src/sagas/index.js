import { all } from 'redux-saga/effects';
import action from './action';

export default function* rootSaga() {
    yield all([
      action(),
    ]);
}