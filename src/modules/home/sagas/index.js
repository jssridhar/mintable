import { takeLatest } from 'redux-saga/effects';

function* emptyFunction(action) {
    console.log(action);
}

export default function* addCompanySaga() {
  yield takeLatest('PLACEHOLDER_ACTION', emptyFunction);
}
