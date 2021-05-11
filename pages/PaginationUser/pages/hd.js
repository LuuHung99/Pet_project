import React from "react";
import { Col, Row} from "antd";

function HdPage(props) {
  return (
    <Row style={{ textAlign: "center" }}>
      <Col
        span={24}
        style={{ fontSize: "24px", fontWeight: "bold", marginTop: "50px" }}
      >
        <h1>Pagination</h1>
        <hr
          style={{ width: "150px", height: "6px", backgroundColor: "green" }}
        />
      </Col>
    </Row>
  );
}

export default HdPage;
