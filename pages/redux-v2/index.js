import React from "react";
import CoronaApp from "./pages/corona";
import { Provider } from "react-redux";
import configStore from "./store/index";

const { store } = configStore();

function ReduxContext(props) {
  return (
    <Provider store={store}>
      <CoronaApp />
    </Provider>
  );
}

export default React.memo(ReduxContext);
