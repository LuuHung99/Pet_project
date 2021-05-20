import React, { useState, useEffect, Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Col, Button, Spin } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import {getDataById} from "./api";

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

function Detail(props) {
  const {id} = useParams();
  const classes = useStyles();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const datas = await getDataById(id);
      // console.log(datas);
      if(datas) {
        setDetail(datas.drinks[0]);
        setLoading(false);
        // console.log("datas",datas.drinks[0]);
      }
    };

    getData();
  }, [id])

  if (
    loading) {
    return (
      <Row style={{textAlign: "center", paddingTop: '200px'}}>
        <Col span={24}>
          <Suspense  fallback={<h1>Loading...</h1>}/>
        </Col>
      </Row>
    );
  }
  // useEffect(() => {
  //   getParams();
  // }, []);

  // var getParams = function () {
  //   const url = window.location.href.split("detail")[1];
  //   console.log(url);
  //   setID(url.slice(1));
  // };

  return (
    
       <div className={classes.container}>
      <div className={classes.title}>
        <Link to="/home"><Button type="primary" className={classes.button_detail}>
          BACK HOME
        </Button></Link>
        <h1 style={{ paddingTop: "20px", fontSize: "32px"}}>{detail.strDrink}</h1>
      </div>
      <Row style={{ padding: '0 100px'}}>
        <Col span={8}>
          <img style={{width: '100%', height: '100%'}} src={detail.strDrinkThumb} />
        </Col>
        <Col style={{paddingLeft: '50px', paddingTop: '50px'}} span={16}>
          <div className={classes.infor}>
            <p>
              <span>Name: </span> {detail.strDrink}
            </p>
            <p>
              <span>Category: </span> {detail.strCategory}
            </p>
            <p>
              <span>Info: </span> {detail.strAlcoholic}
            </p>
            <p>
              <span>Glass: </span> {detail.strGlass}
            </p>
            <p>
              <span>Instructons: </span> {detail.strInstructionsIT}
            </p>
            <p>
              <span>Ingredients: </span> {detail.strIngredient1}
            </p>
          </div>
        </Col>
      </Row>
    </div>
    
  );
}

export default Detail;
