import React from "react";
import "antd/dist/antd.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";

import {
  TwitterOutlined,
  LoadingOutlined,
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

function listNav(props) {
  return (
    <>
      <Header>
        <Row className="nav_menu">
          <Col span={4} className="logo">
            Codding Addict
          </Col>
          <Col span={16}>
            <div>
              <ul className="list_menu" >
                <Link to="/Navbar">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/projects">Projects</Link>

                <Link to="/contact">Contact</Link>

                <Link to="/profile">Profile</Link>
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
    </>
  );
}

export default listNav;
