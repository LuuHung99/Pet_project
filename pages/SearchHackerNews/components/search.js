import React, { useState } from "react";
import { Row, Col, Input } from "antd";
import { useDispatch } from "react-redux";
import { getDataNews } from "../actions/index";

const { Search } = Input;

function SearchPage(props) {
  const dispatch = useDispatch();
  const [news, setNews] = useState("");
  const [note, setNote] = useState("");

  const searchNews = (key) => {
    dispatch(getDataNews(key));
    if(note.length === 0) {
        setNote("Please search ...")
    }
    else {
        setNote("")
    }
  };

  

  return (
    <Row style={{ margin: "30px 90px" }}>
      <Col span={12}>
        <h1 style={{ fontSize: "36px" }}>Search Hacker News</h1>
        <Search
          placeholder="Search hacker news"
          onSearch={(val) => searchNews(val)}
          enterButton
          value={news}
          onChange={(e) => setNews(e.target.value)}
        />
        <h3 style={{color: "green"}}>{note}</h3>
      </Col>
    </Row>
  );
}

export default SearchPage;
