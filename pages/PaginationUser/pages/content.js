import React, { useState, useEffect } from "react";
import { Card, Col, Row, Pagination, Button, Skeleton } from "antd";
import * as api from "../services/api";
// import loadingData from "./loadingData";
import HdPage from "./hd";

const { Meta } = Card;

function ContentUser(props) {
  const [loadingHome, setLoadingHome] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  useEffect(() => {
    const getData = async () => {
      setLoadingHome(true);

      const data = await api.getDataUser(totalPages);
      console.log(data);
      if (data) {
        setData(data);

        // if (totalPages < 1) {
        //   setPage(1);
        // }
        // else if (totalPages > data) {
        //   setPage(data)
        // }
      }
      setLoadingHome(false);
    };
    getData();
  }, []);

  if (loadingHome) {
    return (
      <HdPage>
        <loadingData />
      </HdPage>
    );
  }

  return (
    <>
      <HdPage />
      <Row >
        {data.map((item, index) => (
          <Col span={6} key={index} style={{ padding: "20px"}}>
            <Card
              hoverable
              style={{ width: 200, marginTop: "15px",  textAlign: 'center', backgroundColor: '#BDBDBD'}}
              cover={
                <img
                  alt={item.login}
                  src={item.avatar_url}
                  style={{ height: 150 ,width: 'auto', borderRadius: '50%', marginTop: '20px'}}
                />
              }
            >
              <Meta title={item.login} />
              <Button
                type="primary"
                style={{ marginTop: "15px", borderRadius: "15px" }}
              >
                <a href={item.html_url}>View profile</a>
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Row style={{ textAlign: "center", marginTop: "30px", paddingBottom: '20px', display: "flex"}}>
        <Col span={24}>
          <button 
            
          >
            Prev
          </button>
          <button>{page}</button>
          <button 
            
          >
            Next
          </button>
        </Col>
      </Row>
    </>
  );
}

export default ContentUser;
