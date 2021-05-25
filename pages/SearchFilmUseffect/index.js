import React from "react";
import SearchPage from "./components/search";
import DetailPage from "./components/detail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function SearchFilmUseffect(props) {
  return (
    <Router>
      <Switch>
        <Route  to="/">
          <SearchPage />
        </Route>
        <Route to="/movies/:id">
          <DetailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default SearchFilmUseffect;
