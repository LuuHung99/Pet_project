import React, { useState, useEffect } from "react";
import { Card, Col, Row, Pagination, Button, Skeleton } from "antd";
import * as api from "../services/api";
import loadingData from "./loadingData";
import HdPage from "./hd";

const { Meta } = Card;

function ContentUser(props) {
  const [loadingHome, setLoadingHome] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      setLoadingHome(true);
      const data = await api.getDataUser(page);
      if (data) {
        setData(data.results);
        setTotalPages(data.total_pages);
        if (page < 1) {
          setPage(1);
        } else if (page > data.total_pages) {
          setPage(data.total_pages);
        }
      }
      setLoadingHome(false);
    };
    getData();
  }, [page]);

  if (loadingHome || data.length === 0) {
    return (
      <HdPage>
        <loadingData />
      </HdPage>
    );
  }

  return (
    <>
      <HdPage />
      <Row style={{ margin: "20px 20px", textAlign: "center" }}>
        {data.map((item, index) => (
          <Col span={4} key={index} style={{ margin: "20px" }}>
            <Card
              hoverable
              style={{ width: 220 }}
              cover={
                <img
                  alt={item.title}
                  src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                  style={{ height: 250 }}
                />
              }
            >
              <Meta title={item.title} />
              <Button
                type="primary"
                style={{ marginTop: "15px", borderRadius: "15px" }}
              >
                View profile
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Row style={{ textAlign: "center", marginTop: "30px", paddingBottom: '20px' }}>
        <Col span={24}>
          <Pagination current={page} pageSize={20} total={totalPages} onChange={(pages) => setPage(pages)} />
        </Col>
      </Row>
    </>
  );
}

export default ContentUser;
