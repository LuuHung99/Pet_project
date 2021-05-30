import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as api from "../services/api";
import {GET_DATA_MOVIES} from '../actions/types';

function* searchMovieSaga({name}) {
  //tiep nhan action cua user truyen vao
  try {
    yield put(actions.startDataMovies(true));
    const data = yield call(api.getDataSearchMovie, name);
    
      if (data.results.length > 0) {
        yield put(actions.searchMoviesSuccess(data));
      } 
      else  {
        yield put(
          actions.searchMoviesFailure({
            code: 404,
            message: "Not found data",
          }),         
        );
      }
      yield put(actions.stopDataMovies(false));
  } catch (e) {
    yield put(actions.searchMoviesFailure(e));
  }
}

export default function* watchSearchMovie() {
  //theo doi action
  yield takeEvery(GET_DATA_MOVIES, searchMovieSaga);
}
