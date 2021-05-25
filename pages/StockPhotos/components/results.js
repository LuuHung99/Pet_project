import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { dataPhotos } from "../services/api";

function Results(props) {
  const [dataPhoto, setDataPhoto] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await dataPhotos();
      if (data) {
        setDataPhoto(data);
      }
    };
    getData();
  }, []);

  return (
    <>

      <Row style={{ margin: "60px" }}>
        {dataPhoto.length > 0
          ? dataPhoto.map((item, index) => (
              <Col span={6} style={{ padding: '10px' }} key={index}>
                <div
                  style={{ height: '21.3rem', position: 'relative', overflow: 'hidden'}}
                className="photo">
                  <img
                    src={item.urls.regular}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="hover_img">
                    <div className="photo-info">
                      <p style={{fontWeight: "bold", fontSize: "18px"}}>{item.user.name}</p>
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
            ))
          : null}
      </Row>
    </>
  );
}

export default Results;
