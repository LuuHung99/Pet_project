import React, { useState, useEffect } from "react";
import { Row, Col, Card, Pagination } from "antd";
import LayoutPage from "../components/layout";
const { Meta } = Card;

import { getDataMovies } from "../services/callApi";
import LoadingData from "../components/loadingData";
import ListMovies from "../components/list-movies";

function HomeComponent(props) {
  const [loadingHome, setLoadingHome] = useState(false);
  const [movies, setMovies] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      setLoadingHome(true);
      const data = await getDataMovies(page);
      if (data) {
        setMovies(data.results);
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

  if (loadingHome || movies.length === 0) {
    return (
      <LayoutPage>
        <LoadingData />
      </LayoutPage>
    );
  }

  

  return (
    <LayoutPage>
      <ListMovies movies={movies} />
      <Row style={{ textAlign: "center", marginTop: "20px" }}>
        <Col span={24}>
          <Pagination
            current={page}
            total={totalItems}
            pageSize={20}
            onChange={(pages) => setPage(pages)}
            style={{margin: '0px'}}
          />
        </Col>
      </Row>
    </LayoutPage>
  );
}

export default HomeComponent;
