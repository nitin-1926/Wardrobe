// sagas.ts
import { takeEvery, put } from 'redux-saga/effects';
import { increment, decrement } from './reducer';

function* incrementAsync() {
	yield put(increment());
}

function* decrementAsync() {
	yield put(decrement());
}

export default function* rootSaga() {
	yield takeEvery('INCREMENT_ASYNC', incrementAsync);
	yield takeEvery('DECREMENT_ASYNC', decrementAsync);
}
