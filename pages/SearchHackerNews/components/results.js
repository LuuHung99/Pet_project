import React, { useEffect, useState } from "react";
import { Row, Col, Button, Skeleton } from "antd";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/index"
// import {REMOTE_ITEMS_NEWS} from '../actions/types';

function ResultPage(props) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const isLoading = useSelector((item) => item.searchNews.loading);
  const newsHackers = useSelector((item) => item.searchNews.new);

  const deleteItems = (index) => {
    dispatch(actions.remoteItemsNews(index));
  };

  useEffect(() => {
    dispatch({ type: "GET_DATA_NEWS" });
    setTotalPages(newsHackers.nbPages);
  }, [page])

  if (isLoading) {
    return (
      <Row style={{ textAlign: "center", marginTop: "20px" }}>
        <Col>
          <Skeleton active />
        </Col>
      </Row>
    );
  }

  

  //Ham chuyen pages
  const handleChangePages = (type) => {
    if(type === "prev") {
      if(page > 1) {
        setPage(page - 1);
      }
    }
    if(type === "next") {
      if(page < totalPages) {
        setPage(page + 1);
        console.log(newsHackers);
      }
     }
  }

  return (
    <>
      <Row style={{ marginTop: "50px" }}>
        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          <Button type="primary" onClick={() => handleChangePages("prev")}>Prev</Button>
          <div
            style={{ fontWeight: "bold", fontSize: "20px", margin: "0 20px" }}
          >
            {page} of {newsHackers.nbPages}
          </div>
          <Button type="primary" onClick={() => handleChangePages("next")}>Next</Button>
        </Col>
      </Row>
      <Row
        style={{
          margin: "50px  90px",
          display: "flex",
        }}
      >
        {newsHackers.hasOwnProperty("hits")
          ? newsHackers.hits.map((item, index) => (
              <Col
                key={index}
                span={11}
                style={{
                  width: "auto",
                  height: "auto",
                  backgroundColor: "#D8D8D8",
                  padding: "10px 20px",
                  marginRight: "40px",
                  marginBottom: "30px",
                }}
              >
                <h2>{item.title}</h2>
                <p>
                  {item.points} points by dwwoelfel | {item.num_comments}
                  comments
                </p>

                <div>
                  <a
                    style={{
                      border: "none",
                      padding: "0px 20px",
                      backgroundColor: "#D8D8D8",
                      color: "green",
                    }}
                    href={item.url}
                  >
                    Read More
                  </a>
                  <a
                    type="none"
                    style={{
                      border: "none",
                      backgroundColor: "#D8D8D8",
                      color: "red",
                    }}
                    onClick={() => deleteItems(item.objectID)}
                  >
                    Remove
                  </a>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyItems: "flex-end",
                    marginTop: "10px",
                    justifyContent: "flex-end",
                  }}
                >
                  <p>{item.created_at}</p>
                </div>
              </Col>
            ))
          : null}
      </Row>
    </>
  );
}

export default ResultPage;
