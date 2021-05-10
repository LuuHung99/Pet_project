import React, { useState } from "react";
import { Row, Col, Input } from "antd";
import { useDispatch } from "react-redux";
import { getCurrentWeather } from "../actions/index"; //Hanh dong cua user

const { Search } = Input;

function SearchWeather(props) {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("");

  const onSearchWeather = (nameCity) => {
    dispatch(getCurrentWeather(nameCity));
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "770px",
        backgroundImage: `url("https://rawfour.github.io/weather-app-react/static/media/2850815.246c1201.jpg")`,
      }}
    >
      <Row style={{ padding: "30px", textAlign: "center" }}>
        <Col span={12} offset={6}>
          <Search
            style={{ width: "500px" }}
            placeholder="Enter city name, please"
            onSearch={(val) => onSearchWeather(val)}
            enterButton
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </Col>
      </Row>
    </div>
  );
}

export default React.memo(SearchWeather);
