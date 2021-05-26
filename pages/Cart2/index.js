import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import { getDataCart } from "./api";
import {
  ShoppingCartOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";

function index(props) {
  const [dataCart, setDataCart] = useState([]);
  const [total, setTotal] = useState(1);
  const [number, setNumber] = useState(1);
  const [totalBag, setTotalBag] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const data = await getDataCart();
      if (data) {
        setDataCart(data);
      }
    };
    getData();
  }, []);

  const handlePeItem = (id) => {
    console.log("dfsf", id);
  };

  const handleInPreItem = (id) => {
    console.log("dfsf", id);
  };

  const remoteItem = (seleted) => {
    const newItems = [...dataCart];
    const deleteItems = newItems.filter((e) => e.id !== seleted);
    setDataCart(deleteItems);

    if (newItems.length < 1) {
      setTotal(0);
    }
  };

  const deleteAllItems = () => {
    // console.log("delteAll");
    const newItems = [...dataCart];
    const deleteItems = newItems.filter((e) => console.log(e));
    setDataCart(deleteItems);
    setTotal(0);
  };

  return (
    <Row style={{ margin: "0 auto" }}>
      <Col
        span={24}
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#2680c0",
          width: "100%",
          height: "auto",
        }}
      >
        <h1 style={{ paddingTop: "15px", color: "#fff", fontSize: "30px" }}>
          UseReducer
        </h1>
        <div>
          <ShoppingCartOutlined
            style={{
              fontSize: "34px",
              position: "relative",
              paddingTop: "20dpx",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: ".14rem",

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
            {totalBag}
          </div>
        </div>
      </Col>
      <Col span={24} style={{ textAlign: "center", marginTop: "40px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "38px", letterSpacing: 2 }}>
          YOUR BAG
        </h1>
      </Col>
      {dataCart.length > 0
        ? dataCart.map((item, index) => (
            <Col
              span={14}
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 auto",
                padding: "10px 0px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={item.img}
                  alt=""
                  style={{ width: "5rem", height: "5rem", objectFit: "cover" }}
                />
                <div style={{ marginLeft: "30px" }}>
                  <h3>{item.title}</h3>
                  <p>$ {item.price}</p>
                  <button
                    onClick={() => remoteItem(item.id)}
                    style={{
                      border: "none",
                      background: "none",
                      letterSpacing: 2,
                      fontSize: "16px",
                      color: "green",
                      cursor: "pointer",
                    }}
                  >
                    remote
                  </button>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <UpOutlined
                  onClick={() => handlePeItem(item.id)}
                  style={{
                    color: "#2680c0",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                />
                <div style={{ paddingLeft: "10px" }}>{number}</div>
                <DownOutlined
                  onClick={() => handleInPreItem(item.id)}
                  style={{
                    color: "#2680c0",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </Col>
          ))
        : null}

      <Col span={14} style={{ margin: "0 auto", marginTop: "20px" }}>
        <hr
          style={{ width: "100%", height: "3px", backgroundColor: "green" }}
        />
      </Col>

      <Col
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "18px",
          fontWeight: "bold",
          margin: "0 auto",
        }}
        span={14}
      >
        <h3>Total</h3>
        <p>$ {total.toFixed(2)}</p>
      </Col>
      <Col span={24} style={{ textAlign: "center" }}>
        <Button
          onClick={deleteAllItems}
          style={{
            textTransform: "uppercase",
            border: "none",
            color: "red",
            fontSize: "20px",
            letterSpacing: 2,
            marginBottom: "30px",
          }}
        >
          Clear Cart
        </Button>
      </Col>
    </Row>
  );
}

export default index;
