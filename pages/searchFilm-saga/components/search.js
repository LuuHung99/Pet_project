import React, { useState } from "react";
import { Row, Col, Input, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getDataMovies } from "../actions/index";
const { Search } = Input;

function SearchMovies(props) {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState("");
  
  const searchMoviesFail = (val) => {
    if(movies.length === 0) {
      alert('Pleasr search movies');
    }
    searchMoviesByKey(val);

  }

  const searchMoviesByKey = (keyword) => {
    dispatch(getDataMovies(keyword));
  };

  return (
    <>
      <Row style={{ margin: "20px 0px" }}>
        <Col span={12} offset={6}>
          <Search
            placeholder="Enter movies name, please"
            onSearch={(val) => searchMoviesFail(val)}
            enterButton
            value={movies}
            onChange={(e) => setMovies(e.target.value)}
            
          />
        </Col>
      </Row>

    </>
  );
}

export default React.memo(SearchMovies);
