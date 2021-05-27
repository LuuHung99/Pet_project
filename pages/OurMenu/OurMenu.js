import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

function OurMenu(props) {
  const { items } = props;
  return (
    <Row
      style={{
        paddingTop: "30px",
        paddingLeft: "200px",
        paddingRight: "150px",
        
       
      }}
    >
      <Col span={12}>
        <div className="menu_info">
          <div className="menu_img">
            <img src={items.url} />
          </div>
          <div
            style={{ padding: "20px", paddingTop: "0px" }}
            className="menu_title"
          >
            <div className="title">
              <div className="name">
                <h3>{items.title}</h3>
              </div>
              <hr />
              <div className="price">{items.price}</div>
            </div>
            <div className="text">
              <p>{items.text}</p>
            </div>
          </div>
        </div>
      </Col>
      <Col span={12}>
        <div className="menu_info">
          <div className="menu_img">
            <img src={items.url} />
          </div>
          <div
            style={{ padding: "20px", paddingTop: "0px" }}
            className="menu_title"
          >
            <div className="title">
              <div className="name">
                <h3>{items.title}</h3>
              </div>
              <hr />
              <div className="price">{items.price}</div>
            </div>
            <div className="text">
              <p>{items.text}</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default OurMenu;
