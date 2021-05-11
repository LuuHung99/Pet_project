import React, {useState} from "react";
import { Row, Col, Skeleton, Card, Pagination } from "antd";
import { useSelector } from "react-redux";
const { Meta } = Card;

function ResultWeather(props) {
  const loading = useSelector((state) => state.searchMovie.loading);
  const movies = useSelector((state) => state.searchMovie.dataMovies);




  if (loading) {
    return (
      <Row style={{ padding: "10px" }}>
        <Col span={24}>
          <Skeleton active />
        </Col>
      </Row>
    );
  }
  return (
    <>
      <Row style={{ padding: "40px" }} >
        {movies.hasOwnProperty("results") ? (
          movies.results.map((item, index) => (
            <Col span={4} key={index}>
              <Card
                hoverable
                style={{ width: 200, marginBottom: "15px", marginRight: "8px" }}
                cover={
                  <img
                    alt={item.title}
                    src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                    style={{ height: 250 }}
                  />
                }
              >
                <Meta title={item.title} />
              </Card>
            </Col>
          ))
        ) : null}
      </Row>
      
    </>
  );
}

export default React.memo(ResultWeather);
