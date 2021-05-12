//Gom cac saga lai de theo doi - chay cung 1 luc
import {all, call} from 'redux-saga/effects';
import watchGetDataPersonSagas from './person-saga';

export default function* rootSaga() {
    yield all([
        call(watchGetDataPersonSagas)
    ])
}