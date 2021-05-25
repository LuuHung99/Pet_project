import React, { useState, useEffect } from "react";
import { Input, Row, Col } from "antd";
import { getDataMovies } from "../services/api";
import { Link } from "react-router-dom";

const { Search } = Input;
function SearchFilm(props) {
  const [dataMovies, setDataMovies] = useState([]);
  const [search, setSearch] = useState("batman");

  useEffect(() => {
    const getData = async () => {
      const data = await getDataMovies(search);
      console.log(data);
      if (data.Search) {
        setDataMovies(data.Search);
        console.log(data.Search);
      }
    };
    getData();
  }, [search]);

  const onSearch = (key) => {
    setSearch(key);
  };
  return (
    <div style={{ margin: "50px" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "36px", marginLeft: 70 }}>
        Search Movies
      </h1>
      <Search
        enterButton="Search"
        size="large"
        style={{ width: "40%", marginLeft: 70 }}
        value={search}
        onSearch={(val) => onSearch(val)}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Row style={{ margin: "60px" }}>
        {dataMovies.length > 0
          ? dataMovies.map((item, index) => (
              <Col span={6} key={index} style={{ padding: "10px" }}>
                <Link to={`/movies/${item.imdbID}`}>
                  <div style={{ height: "26rem" }} className="photo">
                    <img
                      src={item.Poster}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div className="hover_img">
                      <div className="photo-info">
                        <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                          {item.Title}
                        </p>
                        <p>{item.Year}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            ))
          : null}
      </Row>
    </div>
  );
}

export default SearchFilm;
