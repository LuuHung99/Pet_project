import React from "react";
import ListNav from "./listNav";
import DetailSlideBar from "./detailSlideBar";
// import DetailNav from "./detailNav";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar(props) {
  return (
    <Router>
      <Switch>
        <Route path="/Navbar" component={ListNav} />
       
        <Route path="/about" component={DetailSlideBar} />

        <Route path="/projects" component={DetailSlideBar} />

        <Route path="/contact" component={DetailSlideBar} />

        <Route path="/profile" component={DetailSlideBar} />
      </Switch>
    </Router>
  );
}

export default Navbar;
