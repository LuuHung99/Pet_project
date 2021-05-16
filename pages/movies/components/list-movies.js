import React from 'react';
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import slugify  from 'react-slugify'
const { Meta } = Card;

function ListMovies(props) {
    return (
        <Row style={{ margin: "30px 0px" }}>
        {props.movies.map((item,index) => ( 
          <Col span={4} key={index}>
            <Link to={`/movies/${slugify(item.original_title)}~${item.id}`}>
              <Card
                hoverable
                style={{ width: 200, marginBottom: "15px", marginRight: "8px" }}
                cover={
                  <img
                    alt={item.title}
                    src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                    style={{ height: 250 }}
                  />
                }
              >
                <Meta title={item.title} />
                
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    );
}

export default ListMovies;