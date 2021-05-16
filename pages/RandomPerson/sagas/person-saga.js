import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as api from "../services/api";
import { GET_DATA_PERSON } from "../actions/types";

function* getDataPersonSaga() {
  try {
    //dispatch action loading -bat dau call data tu api ve
    yield put(actions.getDataPerson(true));
    const data = yield call(api.getDataRandomPerson);
    console.log(data);
    if (data) {
      yield put(actions.getDataPersonSuccess(data));
    } else {
      yield put(
        actions.getDataPersonFail({
          code: 500,
          message: "Not found data",
        })
      );
    }
  } catch (err) {
    yield put(actions.getDataPersonFail(err));
  }
}

//Lay action cua uses de theo doi cac hanh dong cua sagas
export default function* watchGetDataPersonSagas() {
  takeLatest(GET_DATA_PERSON, getDataPersonSaga);
}
