import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Button } from "antd";
import { FileProtectOutlined } from "@ant-design/icons";
import Detail from "./detailProduct";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function index(props) {
  return (
    <Router>
      <div style={{ position: "absolute" }} className="container_menu">
        <div>
          <img
            src="s1.svg"
            style={{ width: "106.8%", height: "500px", zIndex: "1" }}
          />
        </div>
        <div>
          <img
            src="s2.svg"
            style={{
              position: "absolute",
              top: "60px",
              right: "-680px",
              width: "272px",
              height: "548px",
            }}
          />
        </div>
      </div>
      <div style={{ paddingTop: "30px" }}>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 120px",
            color: "white",
            position: "relative",
          }}
        >
          <Col
            style={{
              marginTop: "-20px",
              fontSize: "34px",
              fontWeight: "bold",
              textShadow: "2.5px 2.5px #a3a1a1",
            }}
          >
            stripe
          </Col>
          <Col span={10}>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              <li className="dropdown1">
                Product
                <div className="dropdown-content1">
                  <p>Product</p>
                  <div className="dropdown-detail1">
                    <Link to="/detail">
                      <FileProtectOutlined />
                      Payment
                    </Link>
                    <Link>
                      <FileProtectOutlined />
                      Payment
                    </Link>
                    <Link>
                      <FileProtectOutlined />
                      Payment
                    </Link>
                  </div>
                </div>
              </li>
              <li className="dropdown2">
                Developer
                <div className="dropdown-content2">
                  <p>Developer</p>
                  <div className="dropdown-detail2">
                    <Link>
                      <FileProtectOutlined />
                      Plugin
                    </Link>
                    <Link>
                      <FileProtectOutlined />
                      Libraries
                    </Link>
                    <Link>
                      <FileProtectOutlined />
                      Helpers
                    </Link>
                    <Link>
                      <FileProtectOutlined />
                      Billing
                    </Link>
                  </div>
                </div>
              </li>
              <li className="dropdown3">
                Company
                <div className="dropdown-content3">
                  <p>Company</p>
                  <div className="dropdown-detail3">
                    <Link>
                      <FileProtectOutlined />
                      About
                    </Link>
                    <Link>
                      <FileProtectOutlined />
                      Customer
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
          <Col>
            <Button type="primary">Sign in</Button>
          </Col>
        </Row>
      </div>
      <Switch>
        <Route exact path="/detail">
          <Detail />
        </Route>

      </Switch>
      <div style={{ padding: "0 120px", marginTop: "80px" }}>
        <Row>
          <Col span={14}>
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "90px",
                lineHeight: "1.2",
              }}
            >
              Payments infrastructure for the internet
            </h1>
            <div
              style={{ lineHeight: 1.8, fontSize: "1.25rem", color: "#617d98" }}
              className="title"
            >
              Millions of companies of all sizes—from startups to Fortune
              500s—use Stripe’s software and APIs to accept payments, send
              payouts, and manage their businesses online.
            </div>
            <Button type="primary" style={{ marginTop: "20px" }}>
              Start now
            </Button>
          </Col>
        </Row>
      </div>
    </Router>
  );
}

export default index;
