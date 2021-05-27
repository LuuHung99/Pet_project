import React, { useState } from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";

function ToursComplete(props) {
  const { id, name, info, image, price, deleteItems } = props;
  const [showList, setShowList] = useState(false);
  return (
    <>
      <Row>
        <Col span={12} offset={6} className="row tour" key={id} style={{backgroundColor: '#fff'}}>
          <div className="tour__img">
            <img
              style={{ width: "100%", height: "45vh" }}
              src={image}
              alt={name}
            ></img>
          </div>
          <div className="tour__infor">
            <div className="tour__title">{name}</div>
            <div className="tour__price">${price}</div>
          </div>
          <p>
            <div className="tour__text">
              {showList ? info : `${info.substring(0, 190)}...`}
            </div>
            <button
              onClick={() => setShowList(!showList)}
              className="btn_showHide"
            >
              {showList ? "Show less" : "Read more"}
            </button>
          </p>
          <div className="tour__button">
            <button onClick={() => deleteItems(id)} style={{borderColor: 'red', background:'none', cursor: 'pointer'}}>Not interested</button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ToursComplete;
