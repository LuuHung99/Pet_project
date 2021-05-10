import React from "react";
import { Row, Col, Skeleton } from "antd";
import { useSelector } from "react-redux";

function ResultWeather(props) {
  const isLoading = useSelector((state) => state.currentWeather.loading); //Biet dang lay du lieu ve
  const dataWeather = useSelector((state) => state.currentWeather.weather); //lay du lieu ra
  console.log(dataWeather);

  if (isLoading) {
    return (
      <Row>
        <Col span={24}>
          <Skeleton active />
        </Col>
      </Row>
    );
  }
  return (
    <div style={{ paddingTop: "100px", paddingLeft: "40px", fontSize: "24px" }}>
      <Row>
        {dataWeather.hasOwnProperty("id") ? (
            <Col span={24}>
              <h3>ID: {dataWeather.id} </h3>
            </Col>
          ) : null}
      </Row>
      <div style={{ display: "flex" }}>
        <Row>
          <Col span={24}>
            {dataWeather.hasOwnProperty("name") ? (
              <h1>{dataWeather.name},</h1>
            ) : null}
          </Col>
        </Row>
        <Row style={{ marginLeft: "15px" }}>
          {dataWeather.hasOwnProperty("sys") ? (
            <Col span={24}>
              <h1>{dataWeather.sys.country} </h1>
            </Col>
          ) : null}
        </Row>
      </div>
      <div>
        <Row style={{ marginLeft: "30px" }}>
          {dataWeather.hasOwnProperty("weather")
            ? dataWeather.weather.map((item, index) => (
                <Col span={8} key={index}>
                  <img
                    src={`https://openweathermap.org/img/w/${item.icon}.png`}
                  />
                  {item.description}
                </Col>
              ))
            : null}
        </Row>
        <Row>
          {dataWeather.hasOwnProperty("wind") ? (
            <Col span={8}>
              <h3>Speed: {dataWeather.wind.speed}mph</h3>
            </Col>
          ) : null}
        </Row>
      </div>
    </div>
  );
}

export default React.memo(ResultWeather);
