import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import { makeStyles } from "@material-ui/core/styles";

const initData = [
  {
    id: 1,
    name: "The WET Codbase",
    date: "Sunday 4th, 202011 min read",
    text: "Come waste your time with me",
  },
  {
    id: 2,
    name: "Goodby, Clean Code",
    date: "Friday 22nd, 20195 min read",
    text: "Let clean code guide you. Then let it go.",
  },
  {
    id: 3,
    name: "My Decade In Review",
    date: "Saturday 11th, 20185 min read",
    text: "A personal reflection",
  },
  {
    id: 4,
    name: "What Are The React Team Principles",
    date: "Thursday 4th, 20155 min read",
    text: "UI Before API.",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "757px",
  
  },
  button: {
    position: "absolute",
    right: "0",
    
  },
  container: {
    paddingTop: "30px",
  },
  title: {
    textTransform: "uppercase",
    fontSize: "30px",
    // color: "white",
  },
  h1: {
    fontWeight: "bold",
    // color: "#d23669",
  },
  i: {
    // color: "white",
  },
  p: {
    paddingTop: "20px",
    // color: "white",
  },
}));

function DarkMode(props) {
  const classes = useStyles();
  const [colorBackground, setColorBackground] = useState(true);
  const [colorTitle, setColorTitle] = useState(true);
  const [colorName, setColorName] = useState(true);
  const [colorDate, setColorDate] = useState(true);
  const [colorText, setColorText] = useState(true);

  const handleChangeColor = () => {
    if(colorBackground && colorTitle && colorDate && colorText && colorName ) {
      setColorBackground(false);
      setColorTitle(false);
      setColorName(false);
      setColorDate(false);
      setColorText(false);
    }
    else{ setColorBackground(true); 
    setColorTitle(true);
      setColorName(true);
      setColorDate(true);
      setColorText(true);
    } 
      
    // if(colorTitle) {
    //   setColorTitle(false);
    // }
    // else
  };

  return (
    <Row
      className={classes.root}
      style={{ backgroundColor: colorBackground ? "#282c35" : "white" }}
    >
      <Col span={12} offset={6} className={classes.container}>
        <Button
          type="primary"
          danger
          className={classes.button}
          onClick={handleChangeColor}
        >
          Toggle
        </Button>
        <h1 className={classes.title} 
          style={{color: colorTitle ? "white" : "#282c35" }}
        >
          Overreacted
        </h1>
        {initData.map((e) => (
          <div>
            <h1 className={classes.h1} 
              style={{color: colorName ? "#d23669" : "#d23669"}}
            >
              {e.name}
            </h1>
            <i className={classes.i}  style={{color: colorDate ? "white" : "black"}}>
              {e.date}
            </i>
            <p className={classes.p}  style={{color: colorText ? "white" : "black"}}>
              {e.text}
            </p>
          </div>
        ))}
      </Col>
    </Row>
  );
}

export default DarkMode;
