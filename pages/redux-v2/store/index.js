import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "../reducers/index";
import rootSaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
  const store = createStore(
    rootReducer,
    {},
    applyMiddleware(
        sagaMiddleware,
        logger //log ra nhung su kien
        ) 
  );
  sagaMiddleware.run(rootSaga);
  return {store: store};
};

export default configStore;
