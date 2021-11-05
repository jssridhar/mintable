import { all } from 'redux-saga/effects';
import homeSaga from './modules/home/sagas';
import raffleSaga from './modules/raffle/sagas';

const sagas = [
    homeSaga,
    raffleSaga,
];

export default function* rootSaga() {
    yield all(sagas.map(saga => saga()));
}