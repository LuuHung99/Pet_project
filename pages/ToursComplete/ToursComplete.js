import React, { useState } from "react";
import "antd/dist/antd.css";
import { Typography, Row, Col } from "antd";
const { Paragraph } = Typography;

function ToursComplete(props) {
  // const ShowHideText = () => {
  //     const [showText, setShowText] = useState(false);
  //     const onClick = () => setShowText(true);

  // }
  const [ellipsis, setEllipsis] = useState(true);
  // const [showText, setShowText] = useState('Show less');
  const { item } = props;

  // const handleShowText = (id) => {
  //     console.log(id);
  // }

  const changeText = () => {
    
  } 

  return (
    <>
      <Row>
        <Col span={12} offset={6} className="row tour">
          <div className="tour__img">
            <img
              style={{ width: "100%", height: "45vh" }}
              src={item.url}
              alt=""
            ></img>
          </div>
          <div className="tour__infor">
            <div className="tour__title">{item.title}</div>
            <div className="tour__price">{item.price}</div>
          </div>
          <div className="tour__text">
            <Paragraph
              ellipsis={
                ellipsis
                  ? {
                      // rows: 1,
                      expandable: true,
                      symbol: "Read more",
                      // onExpand: setEllipsis(true)
                    }
                  : {
                      // expandable: false,
                      // symbol: "Show less",
                    }
              }
              onClick={changeText}
            >
              {item.text}
            </Paragraph>
          </div>
          <div className="tour__button">
            <button onClick={() => props.deleteItems(item.id)}>
              Not interested
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ToursComplete;
