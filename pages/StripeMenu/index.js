import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import DetailProduct from "./detailProduct";
import MenuPage from "./menu";

function StripMenu(props) {
  return (
    <Router>
        <Switch >
          <Route path= "/StripeMenu">
            <MenuPage />
          </Route>
          <Route path= "/detail">
            <DetailProduct />
          </Route>
        </Switch>
    </Router>
  );
}

export default StripMenu;