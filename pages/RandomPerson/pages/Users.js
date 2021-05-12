import React from 'react';
import {useSelector} from "react-redux";
import {Row, Col, Skeleton} from "antd";

function Users(props) {
    const isLoading = useSelector((state) => state.persons.loading);
    const data = useSelector((state) =>state.persons.person);
    console.log((data));
    if (isLoading) {
        return (
            <Skeleton active />
        )
    }
    return (
        <Row style={{ padding: "40px" }} >
            
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
          )): null}
          
      </Row>
      
    );
}

export default Users;