import React, { useState, Suspense, useEffect } from "react";
import { Row, Col, Input, Button, Skeleton, Pagination } from "antd";
import { getDataNew } from "../services/api";

const { Search } = Input;

function ResultPage(props) {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [keywords, setKeywords] = useState("");

  

  useEffect(() => {
    const getData = async () => {
      // setLoading(true)
      const data = await getDataNew(keywords, page);
      if (data) {
        setNews(data.hits);
        setTotalPage(data.nbPages);
        
      }
      // setLoading(false);
    };
    getData();
  }, [page, keywords]);

  if (loading) {
    return <Skeleton active />;
  }

  //Viet ham chuyen page
  const handleChangePage = (type) => {
    if (type === "prev") {
      if (page > 1) {
        setPage(page - 1);
      }
      
    } else if (type === "next") {
      if (page < totalPage) {
        setPage(page + 1);
      }
      
    }
  };

  //Delete item
  const deleteItems = (selected) => {
    const newData = news.filter((e) => {
      if (e.objectID !== selected) return e;
    });
    setNews(newData);
  };

  return (
    <>
      <Row style={{ margin: "30px 90px" }}>
        <Col span={12}>
          <h1 style={{ fontSize: "36px" }}>Search Hacker News</h1>
          <Search
            placeholder="Search hacker news"
            enterButton
            value={keywords}
            onChange={(e) => {
              console.log("Key");
              setKeywords(e.target.value);
              // console.log(e.target.value);

              // setTimeout(() => {
              //   setKeywords(e.target.value);
              // }, 100);
            }}
          />
        </Col>
      </Row>
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
          <Button type="primary" onClick={() => handleChangePage("prev")}>
            Prev
          </Button>

          <div
            style={{ fontWeight: "bold", fontSize: "20px", margin: "0 20px" }}
          >
            {page} of {totalPage}
          </div>
          <Button type="primary" onClick={() => handleChangePage("next")}>
            Next
          </Button>
        </Col>
      </Row>
      {/* <Row style={{ textAlign: "center", marginTop: "30px" }}>
        <Col span={24}>
          <Pagination current={page} pageSize={20} total={totalItems} />
        </Col>
      </Row> */}
      <Row
        style={{
          margin: "50px  90px",
          display: "flex",
        }}
      >
        {news.map((item, index) => (
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
              {item.points} points by dwwoelfel | {item.num_comments} comments
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
        ))}
      </Row>
    </>
  );
}

export default ResultPage;
