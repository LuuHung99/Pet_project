import React from "react";
import AppWeather from "./pages/weather";
import { Provider } from "react-redux";
import configStore from "./store/index";

const { store } = configStore();

function AppIndex(props) {
  return (
    <Provider store={store}>
      <AppWeather />
    </Provider>
  );
}

export default AppIndex;
