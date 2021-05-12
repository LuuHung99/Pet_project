import React, { useState } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

function Accordion({ questions }) {
  const [showList, setShowList] = useState(false);
  return (
    <>
      <Row
        style={{
          background: "#4b145b",
          width: "100%",
          height: "auto",
          padding: "150px 0px",
        }}
      >
        {questions.length > 0 &&
          questions.map((qes) => {
            const { id, title, infor } = qes;
            return (
              <Col
                span={12}
                offset={6}
                key={id}
                style={{
                  width: "auto",
                  height: "auto",
                  backgroundColor: "#fff",
                }}
              >
                <div
                  style={{
                    margin: " 20px 30px",
                    width: "auto",
                    height: "auto",
                    boxShadow:
                      " 0 4px 8px 0 rgb(0 0 0 / 20%), 0 8px 20px 0 rgb(0 0 0 / 19%)",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <h3>{title}</h3>
                      {showList ? <p>{infor}</p> : null}
                    </div>
                    <div>
                      <button
                        style={{ border: "none", backgroundColor: "#fff" }}
                        onClick={(id) => setShowList(!showList, id)}
                      >
                        {showList ? <MinusOutlined style={{ marginRight: "20px" }} /> : <PlusOutlined style={{ marginRight: "20px" }} />}
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </>
  );
}

export default Accordion;
