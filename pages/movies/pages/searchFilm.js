import React, { useState } from "react";
import { Row, Col, Input, Card, Pagination } from "antd";
import LayoutPage from "../components/layout";
import { getDataSearchFilm } from "../services/callApi";
import LoadingData from "../components/loadingData";
import ListMovies from "../components/list-movies";
const { Search } = Input;

function SearchFilm(props) {
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [keywords, setKeywords] = useState("");
  const [listMovies, setListMovies] = useState([]);

  const searchMovies = async (key = "", currentPage = 1) => {
    if (key.length > 0) {
      setLoadingSearch(true);
      const data = await getDataSearchFilm(key, currentPage);
      if (data) {
        setListMovies(data.results);
        setTotalItems(data.total_results);
        setPage(currentPage);
        setLoadingSearch(false);
        window.scrollTo(0, 0);
      }
    }
  };
  
  if (loadingSearch && listMovies.length === 0) {
    <LayoutPage>
      <LoadingData />
    </LayoutPage>;
  }

  return (
    <LayoutPage>
      <Row style={{ margin: "20px 0px" }}>
        <Col span={12} offset={6}>
          <Search
            placeholder="input search text"
            onSearch={(val) => searchMovies(val)}
            enterButton
            onChange={(event) => setKeywords(event.target.value)}
            value={keywords}
          />
        </Col>
      </Row>
      <ListMovies movies={listMovies} />

      
      {/*Phan trang */}
      {listMovies.length > 0 && (
        <Row style={{ textAlign: "center", margin: "20px 0px" }}>
          <Col span={24}>
            <Pagination
              current={page}
              total={totalItems}
              pageSize={20}
              onChange={(pages) => searchMovies(keywords, pages)}
            />
          </Col>
        </Row>
      )}
    </LayoutPage>
  );
}

export default SearchFilm;
