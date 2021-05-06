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
  const {item} = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Button type="primary" className={classes.button_detail}>
          BACK HOME
        </Button>
        <h1 style={{ paddingTop: "20px" }}>GG</h1>
      </div>
      <Row style={{ padding: '0 100px'}}>
        <Col span={8}>
          <img style={{width: '100%', height: '100%'}} src="https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg" />
        </Col>
        <Col style={{paddingLeft: '50px', paddingTop: '50px'}} span={16}>
          <div className={classes.infor}>
            <p>
              <span>Name: </span> {item.name}
            </p>
            <p>
              <span>Category: </span> {item.category}
            </p>
            <p>
              <span>Info: </span> {item.info}
            </p>
            <p>
              <span>Glass: </span> {item.glass}
            </p>
            <p>
              <span>Instructons: </span> {item.instructons}
            </p>
            <p>
              <span>Ingredients: </span> {item.ingredients}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DetailPage;
