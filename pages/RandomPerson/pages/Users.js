import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Skeleton } from "antd";

function Users(props) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.persons.loading);
  const data = useSelector((state) => state.persons.person);

  if (isLoading) {
    return <Skeleton active />;
  }

  useEffect(() => {
    dispatch({ type: "GET_DATA_PERSON" });
  }, []);

  return (
    <Row style={{ padding: "40px" }}>
      {data.hasOwnProperty("results") ? data.results.map((item, index) => (
            <Col span={4} key={index}>
              <Card
                hoverable
                style={{ width: 200, marginBottom: "15px", marginRight: "8px" }}
                cover={
                  <img
                    alt={item.email}
                    src={item.picture.large}
                    style={{ height: 250 }}
                  />
                }
              >
                <Meta title={item.email} />
              </Card>
            </Col>
          )
      ): <h1>HideText </h1>}
    </Row>
  );
}

export default Users;
