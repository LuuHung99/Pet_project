import {all, call} from 'redux-saga/effects';
import {watchSearchNews} from './news-saga';

export default function* rootSaga() {
    yield all([
        call(watchSearchNews)
    ])
}