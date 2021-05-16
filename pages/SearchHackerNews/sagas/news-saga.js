import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import * as api from "../services/api";
import * as actions from "../actions/index";
import { GET_DATA_NEWS } from "../actions/types";
import * as helpers from "../common/index";

function* getDataNewsSaga({ name }) {
  try {
    yield put(actions.loadingDataNews(true));
    const data = yield call(api.getDataSearchNews, name)
    console.log("data",data)
    if (!helpers.isEmtyObject(data)) {
      if (data.hits.length > 0) {
        yield put(actions.getDataNewsSuccess(data));
      } else {
        yield put(
          actions.getDataNewsFail({
            code: 404,
            message: "Not found data",
          })
        );
      }
    } else {
      yield put(
        actions.getDataNewsFail({
          code: 404,
          message: "Not found data",
        })
      );
    }
    yield put(actions.stopDataNews(false));
  } catch (err) {
    yield put(actions.getDataNewsFail(err));
    yield put(actions.stopDataNews(false))
  }
}

export function* watchSearchNews() {
  yield takeLatest(GET_DATA_NEWS, getDataNewsSaga);
}
