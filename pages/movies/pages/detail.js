import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card } from "antd";
import LayoutPage from "../components/layout";
import { getDataMoviesById } from "../services/callApi";
import LoadingData from "../components/loadingData";

const { Meta } = Card;

function DetailMoviesPage(props) {
  const { id } = useParams(); // lay duoc params tu url xuong

  //call api dua vao id bo phim
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [detailMovie, setDetailMovie] = useState({});

  useEffect(() => {
    const getData = async () => {
      setLoadingDetail(true);
      const data = await getDataMoviesById(id);
      if (data) {
        setDetailMovie(data);
        setLoadingDetail(false);
      }
    };
    getData();
  }, [id]);

  //Check object detailMovie khong rong
  if (
    loadingDetail &&
    Object.keys(detailMovie).length === 0 &&
    detailMovie.constructor === Object
  ) {
    return (
      <LayoutPage>
        <LoadingData />
      </LayoutPage>
    );
  }

  //   console.log(detailMovie);
  return (
    <LayoutPage>
      <Row style={{ margin: "20px 0px" }}>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt={detailMovie.title}
                src={`https://image.tmdb.org/t/p/w200/${detailMovie.poster_path}`}
                style={{ height: "300px" }}
              />
            }
          >
            <Meta title={detailMovie.tagline} />
          </Card>
        </Col>
        <Col span={12}>
          <h1>{detailMovie.title}</h1>
          <p>{detailMovie.overview}</p>
          <p>
            Vote average : {detailMovie.vote_average} - Vote count :{" "}
            {detailMovie.vote_count}
          </p>
        </Col>
        <Col span={6}>
          <Row>
            {detailMovie.production_companies !== undefined
              ? detailMovie.production_companies.map((item, index) => (
                  <Col span={24} key={index}>
                    <Card
                    bordered={false}
                      hoverable
                      
                      cover={
                        <img
                          alt={detailMovie.title}
                          src={`https://image.tmdb.org/t/p/w200/${item.logo_path}`}
                          style={{width: '50%', height: '50%'}}
                        />
                      }
                    >
                      <Meta title={item.name} />
                    </Card>
                  </Col>
                ))
              : null}
          </Row>
        </Col>
      </Row>
    </LayoutPage>
  );
}

export default DetailMoviesPage;
