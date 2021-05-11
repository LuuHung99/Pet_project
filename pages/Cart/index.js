import React, { useState } from "react";
import "antd/dist/antd.css";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(() => ({

// }));

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Row, Col, Divider, Button } from "antd";
import {
  ShoppingCartOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

const initTodoList = [
  {
    id: 1,
    quality: 1,
    image:
      "https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png",
    name: "Samsung Galaxy S8",
    price: 399.99,
    status: true,
  },
  {
    id: 2,
    quality: 1,
    image:
      "https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png",
    name: "Google Pixel",
    price: 499.99,
    status: true,
  },
  {
    id: 3,
    quality: 1,
    image:
      "https://dl.airtable.com/.attachments/bae9208dc34f35128749ecda5b999e84/337c285d/phone-3_h2s6fo.png",
    name: "Xiaomi Redmi Note 2",
    price: 699.99,
    status: true,
  },
  {
    id: 4,
    quality: 1,
    image:
      "https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png",
    name: "Samsung Galaxy S7",
    price: 599.99,
    status: true,
  },
];

const sum = (data) => {
  let q = 0;
  let s = 0;
  for (let i of data) {
    q += i.quality;
    s += i.quality * i.price;
  }
  return { q, s };
};

function index(props) {

  const { s, q } = sum(initTodoList);
  // const classes = useStyles();
  const [data, setData] = useState(initTodoList);
  const [number, setNumber] = useState(q);
  const [total, setTotal] = useState(s);
  const [showTotal, setShowTotal] = useState(true);
  const [title, setTitle] = useState(true);

  const deteleAll = () => {
    const changeData = data.filter((e) => {
      console.log(e);
    });
    setData(changeData);
    setShowTotal(true);
    setTitle(false);
    setNumber(0);
    setTotal(0);
  };

  const deleteItems = (id) => {
    let newData = [];
    let totals = 0;
    let numbers = 0;

    for(let item of data) {
        if(item.id == id){
            newData.push({
                ...item,
                quality: 0,
                status: false
            }) 
        }else {
            numbers += item.quality;
            totals += item.quality * item.price;
            newData.push(item);
        }
    }

    setData(newData);
    setTotal(totals);
    setNumber(numbers);
  };

  const inCrement = (value) => {
    // tìm đến phẩn tử có id = value
    let numbers = 0;
    let newData = [];
    let totals = 0;

    for (let item of data) {
      if (item.id == value) {
        numbers += item.quality + 1;
        totals += (item.quality + 1) * item.price;
        newData.push({
          ...item,
          quality: item.quality + 1,
        });
      } else {
        numbers += item.quality;
        totals += item.quality * item.price;
        newData.push(item);
      }
    }
    setData(newData);
    setTotal(totals);
    setNumber(numbers);
  };

  const deCrement = (value) => {
    let numbers = 0;
    let newData = [];
    let totals = 0;

    for (let item of data) {
        
      if (item.id == value) {
        //sl = 0 =>status = false
        // SL = 1 => event 1-1 = 0
        if (item.quality - 1 > 0) {
            numbers += item.quality - 1;
          totals += (item.quality - 1) * item.price;
          newData.push({
            ...item,
            quality: item.quality - 1,
          });
        } else {
          newData.push({
            ...item,
            status: false,
            quality: item.quality - 1,
          });
        }
      } else {
        numbers += item.quality;
        totals += item.quality * item.price;
        newData.push(item);
      }
    }
    setData(newData);
    setTotal(totals);
    setNumber(numbers);
  };

  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "#2680c0" }}>
          <Row>
            <Col
              span={12}
              offset={6}
              style={{
                color: "white",
                fontSize: "35px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginLeft: "-7rem" }}>UseReducer</div>
              <div>
                <ShoppingCartOutlined />
              </div>
            </Col>
            <div
              style={{
                position: "absolute",
                top: ".85rem",
                left: ".85rem",
                marginLeft: "66rem",
                marginTop: "-.45rem",
                width: "1.75rem",
                height: "1.75rem",
                borderRadius: "50%",
                color: "#fff",
                backgroundColor: "#85c6f4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {number}
            </div>
          </Row>
        </Header>
        <Content style={{ paddingBottom: "30px" }}>
          <Row justify="center">
            <Col
              style={{ fontSize: "bold", fontSize: "30px", paddingTop: "50px" }}
            >
              {title ? (
                <h1>YOUR BAG</h1>
              ) : (
                <h1>YOUR BAG</h1> && <h4>is currently empty</h4>
              )}
            </Col>
          </Row>
          {data.map((e, index) =>
            e.status ? (
              <Row style={{ paddingBottom: "20px" }} key={index}>
                <Col
                  span={12}
                  offset={6}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex" }}>
                    <div>
                      <img
                        style={{ width: "20%", height: "100%" }}
                        src={e.image}
                      />
                    </div>
                    <div style={{ marginLeft: "-280px", fontSize: "18px" }}>
                      <div>{e.name}</div>
                      <div style={{ color: "#617d98" }}>${e.price}</div>
                      <div
                        style={{ color: "#2680c0", cursor: "pointer" }}
                        onClick={() => deleteItems(e.id)}
                      >
                        remove
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <UpOutlined
                        style={{ cursor: "pointer", color: "#2680c0" }}
                        onClick={() => inCrement(e.id)}
                      />
                    </div>
                    <div style={{ marginLeft: "12px" }}>{e.quality}</div>
                    <div>
                      <DownOutlined
                        style={{ cursor: "pointer", color: "#2680c0" }}
                        onClick={() => deCrement(e.id)}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            ) : null
          )}
          <hr style={{ width: "50%", textAlign: "center" }} />
          {showTotal ? (
            <Row>
              <Col
                span={12}
                offset={6}
                justify="center"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Total
                </div>
                <div style={{ fontWeight: "bold", fontSize: "26px" }}>
                  ${total.toFixed(2)}
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
        </Content>
        <Footer>
          <Row>
            <Col
              style={{
                margin: "0 auto",
                border: "1px solid red",
                borderRadius: "5%",
              }}
            >
              <Button
                style={{
                  textTransform: "uppercase",
                  color: "red",
                  hover: "#e66b6b",
                }}
                onClick={deteleAll}
              >
                Clear Cart
              </Button>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </>
  );
}

export default index;
