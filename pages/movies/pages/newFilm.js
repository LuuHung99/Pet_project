import React, { useState, useEffect } from "react";
import { Row, Col, Card, Pagination } from "antd";
import LayoutPage from "../components/layout";
import { Link } from "react-router-dom";
import slugify  from 'react-slugify';
import { getDataMovies } from "../services/callApi";
import LoadingData from "../components/loadingData";

const { Meta } = Card;

function NewFilm(props) {
  const [loadingHome, setLoadingHome] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setLoadingHome(true);
      const data = await getDataMovies(page);
      if (data) {
        setListData(data.results);
        setTotalItems(data.total_results);
        if (page < 1) {
          setPage(1);
        } else if (page > data.total_pages) {
          setPage(data.total_pages);
        }
        setLoadingHome(false);
      }
    };
    getData();
  }, [page]);

  if (loadingHome || listData.length === 0) {
    return (
      <LayoutPage>
        <LoadingData />
      </LayoutPage>
    );
  }

  return (
    <LayoutPage>
      <Row style={{ margin: "30px 0px" }}>
        {listData.map((item, index) => (
            <Col span={4} key={index}>
          <Card
            hoverable
            style={{ width: 200,marginBottom: "15px", marginRight: "8px" }}
            cover={
              <img
                alt={item.title}
                src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                style={{height: '250px'}}
              />
            }
          >
            <Meta title={item.title}  />
          </Card>
          </Col>
        ))}
      </Row>
      <Row style={{ marginTop: " 20px 0px", textAlign: "center" }}>
            <Col span={24}>
                <Pagination 
                    current={page}
                    total={totalItems}
                    pageSize={20}
                    onChange={(pages) => setPage(pages)}
                />
            </Col>
      </Row>
    </LayoutPage>
  );
}

export default NewFilm;
