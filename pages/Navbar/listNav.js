import React from "react";
import "antd/dist/antd.css";
import DetailNav from "./detailNav";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";


const { Header, Content, Footer } = Layout;

function listNav(props) {
  return (
    <Router>
      <Header>
        <Row className="nav_menu">
          <Col span={4} className="logo">
            Codding Addict
          </Col>
          <Col span={16}>
            <div>
              <ul className="list_menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={4}>
            <TwitterOutlined />
            <LoadingOutlined />
            <SmileTwoTone />
            <HeartTwoTone twoToneColor="#eb2f96" />
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Col>
        </Row>
      </Header>
      <Switch>
      
          <Route  path="/about" component={DetailNav} />

    <Route  path="/projects" component={DetailNav} />

    <Route  path="/contact" component={DetailNav} />

    <Route  path="/profile" component={DetailNav} />
      </Switch>

     
    </Router>
  );
}

export default listNav;
