import React from "react";
import Model from "./model";
import SideBar from "./slideBar";
import DetailSlideBar from "./detailSlideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function SlideBarModel(props) {
  return (
    <Router>
      <Switch>
        <Route path="/SideBarModel">
          <SideBar />
          <Model />
        </Route>
        <Route path="/team" component={DetailSlideBar} />
        
        <Route path="/project" component={DetailSlideBar} />

        <Route path="/calendar" component={DetailSlideBar} />

        <Route path="/documents" component={DetailSlideBar} />
      </Switch>
    </Router>
  );
}

export default SlideBarModel;
