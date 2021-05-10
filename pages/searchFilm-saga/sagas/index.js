import { all, call } from "redux-saga/effects";
import watchSearchMovie  from "./search-movies";
export default function* rootSaga() {
  yield all([
    call(watchSearchMovie),
    //... Neu cos nhieu saga thi call o day
  ]);
}
