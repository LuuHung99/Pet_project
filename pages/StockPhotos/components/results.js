import React, { useState, useEffect } from "react";
import { Row, Col, Input, Pagination, Spin } from "antd";
import { getDataPhotos } from "../services/api";

const { Search } = Input;

function ResultPage(props) {
  //   const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const data = await getDataPhotos(search, page);
      if (data) {
        console.log(data.results);
        setPhoto(data.results);
        setTotalPage(data.total);
      }
      if (page < 1) {
        setPage(1);
      } else if (page > data.total_pages) {
        setPage(data.total_pages);
      }
    };
    getData();
  }, [search, page]);

  return (
    <>
      <Row style={{ margin: "60px" }}>
        <Col span={8}>
          <Search
            placeholder="input search text"
            enterButton
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>

      {photo.length === 0 ? null : (
        <Row style={{ marginTop: "30px", textAlign: "center" }}>
          <Col span={24}>
            <Pagination
              current={page}
              pageSize={10}
              total={totalPage}
              onChange={(pages) => setPage(pages)}
            />
          </Col>
        </Row>
      )}

      <Row style={{ margin: "60px" }}>
        {photo.map((item, index) => (
          <Col span={7} key={index} style={{ margin: "20px" }}>
            <div
              style={{ position: "relative", height: "17.5rem" }}
              className="photo"
            >
              <img
                src={item.urls.regular}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  bottom: 0,
                  left: 0,
                  padding: "0.3rem 1rem",
                  background: "rgba(0,0,0,.4)",
                  color: "white",
                  // transform: "translateY(100%)",
                  // opacity: '30%',
                  transition: "all .3s linear",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="hover_img"
              >
                <div className="photo-info">
                  <p>{item.user.name}</p>
                  <p>{item.likes} likes</p>
                </div>
                <div>
                  <a href={item.links.html}>
                    <img
                      src={item.user.profile_image.medium}
                      alt=""
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ResultPage;
