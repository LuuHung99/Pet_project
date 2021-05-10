import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/index";
import { GET_CURRENT_WEATHER } from "../actions/type";
import * as api from "../services/index";
import * as helpers from "../helpers/common";

function* currentWeatherSaga({ city }) {
  try {
    yield put(actions.startGetDataWeather(true));
    const weather = yield call(api.getCurrentWeather, city);
    if (!helpers.isEmtyObject(weather)) {
      if (weather.cod === 200) {
        yield put(actions.getCurrentWeatherSuccess(weather));
      } else {
        yield put(
          actions.getCurrentWeatherFailed({
            code: 500,
            message: "Not found data",
          })
        );
      }
    } else {
      yield put(
        actions.getCurrentWeatherFailed({
          code: 500,
          message: "Not found data",
        })
      );
    }
  } catch (e) {
    // console.log(e);
    yield put(actions.getCurrentWeatherFailed(e));
  }
}

export function* watchCurrentWeatherSaga() {
  yield takeLatest(GET_CURRENT_WEATHER, currentWeatherSaga);
}
