import {put, call, takeLatest, takeEvery} from 'redux-saga/effects';
//put: dispatch action vao reducer
//call: goi api
//takeLast : Theo doi hanh dong saga se lam, chi tiep nhan hanh dong cuoi cung
//takeEvery: Tiep nhan bat ky hanh dong nao say den

import * as actions from '../actions/index';
import * as api from '../services/index';
import {GET_DATA_CORONA} from '../actions/type';

//yield: Su ly 1 cach dong bo, viec nay chay xong viec khac moi duoc chay

function* getDataVirutSaga() {
    try {
        //dispatch action loading -bat dau call data tu api ve
        yield put(actions.startGetDataVirut(true));
        const data = yield call(api.getDataVirutsCorona);
        if(data) {
            yield put(actions.getDataSuccess(data));
        }
        else {
            yield put(action.getDataFail({
                code: 500,
                message: 'not found data'
            }));
        }
    }
    catch (err) {
        console.log(err);
    }
}

export function* watchGetDataVirutSaga() {
    //theo doi action
    // yield takeLatest(GET_DATA_CORONA, getDataVirutSaga);
    yield takeEvery(GET_DATA_CORONA, getDataVirutSaga);
}
