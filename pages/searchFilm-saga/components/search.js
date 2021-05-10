import React, {useState}  from "react";
import { Row, Col, Input } from "antd";
import {useDispatch} from "react-redux";
import {getDataMovies} from "../actions/index";
const { Search } = Input;

function SearchMovies(props) {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState('');

  const searchMoviesByKey = (keyword) => {
    dispatch(getDataMovies(keyword));
  }
  
  return (
    <Row style={{ margin: "20px 0px" }}>
      <Col span={12} offset={6}>
        <Search
          placeholder="Enter movies name, please"
          onSearch={(val) => searchMoviesByKey(val)}
          enterButton
          value={movies}
          onChange={(e) => setMovies(e.target.value)}
        />
      </Col>
    </Row>
  );
}

export default React.memo(SearchMovies);
