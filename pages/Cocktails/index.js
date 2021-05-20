import React, { lazy, Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Col, Skeleton } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import About from "./about";
// import Home from "./about";
// import Details from './detail';

const About = lazy(() => import("./about"));
const Home = lazy(() => import("./home"));
const Details = lazy(() => import("./detail"));

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
  },
  menus: {
    padding: "20px 0px",
  },
  menu: {
    color: "black",
    display: "flex",
    justifyContent: "flex-end",
    fontSize: "18px",
    lineHeight: "2",
    "& a": {
      marginLeft: "20px",
    },
  },

  logoTitle: {
    fontSize: "24px",
  },
  hrs: {
    height: "2px",
    backgroundColor: "green",
    boxShadow: "0 2px 2px 2px #777",
  },
}));

function Cocktails(props) {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.container}>
        <Row className={classes.menus}>
          <Col span={8} className={classes.logoTitle}>
            The<b style={{ color: "green" }}>Cocktail</b>DB
          </Col>
          <Col span={8} offset={8} className={classes.menu}>
            <Link to="/home">
              <a>Home</a>
            </Link>
            <Link to="/about">
              <a>ABout</a>
            </Link>
          </Col>
        </Row>
        <hr className={classes.hrs} />
      </div>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/detail/:id" component={Details} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Cocktails;
