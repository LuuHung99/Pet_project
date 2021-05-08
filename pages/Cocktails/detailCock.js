import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "50px",
  },
  title: {
    textAlign: "center",
  },
  button_detail: {
    letterSpacing: "3px",
  },
  infor: {
      fontSize: "18px",
      fontWeight: "bold",
      
      '& span': {
          backgroundColor: '#d4e6a5',
          marginRight: '8px',
          color: "#476a2e",
      }
  }
}));

function DetailPage(props) {
  const {name, images, info, category, glass, instruction, ingredients} = props.item;
  const classes = useStyles();
  return (
    <Router>
    <div className={classes.container}>
      <div className={classes.title}>
        <Link to="/home"><Button type="primary" className={classes.button_detail}>
          BACK HOME
        </Button></Link>
        <h1 style={{ paddingTop: "20px" }}>{name}</h1>
      </div>
      <Row style={{ padding: '0 100px'}}>
        <Col span={8}>
          <img style={{width: '100%', height: '100%'}} src={images} />
        </Col>
        <Col style={{paddingLeft: '50px', paddingTop: '50px'}} span={16}>
          <div className={classes.infor}>
            <p>
              <span>Name: </span> {name}
            </p>
            <p>
              <span>Category: </span> {category}
            </p>
            <p>
              <span>Info: </span> {info}
            </p>
            <p>
              <span>Glass: </span> {glass}
            </p>
            <p>
              <span>Instructons: </span> {instruction}
            </p>
            <p>
              <span>Ingredients: </span> {ingredients}
            </p>
          </div>
        </Col>
      </Row>
    </div>
      
    </Router>
  );
}

export default DetailPage;
