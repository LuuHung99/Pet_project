import React from "react";
import AppMovies from "./pages/movie";
import { Provider } from "react-redux";
import configStore from "./store/index";

const {store} = configStore({});

function SearchFilm(props) {
  return (
    <Provider store={store}>
      <AppMovies />
    </Provider>
  );
}

export default SearchFilm;
