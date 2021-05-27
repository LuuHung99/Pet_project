import React, { useState, useEffect } from "react";
import { Row, Col, Button, Modal } from "antd";
import { getDataCart } from "./api";
import {
  ShoppingCartOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";

const dataFake = [
  {
    id: "rec1JZlfCIBOPdcT2",
    title: "Samsung Galaxy S8",
    price: "399.99",
    img: "https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png",
    amount: 1,
    status: true,
  },
  {
    id: "recB6qcHPxb62YJ75",
    title: "google pixel",
    price: "499.99",
    img: "https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png",
    amount: 1,
    status: true,
  },
  {
    id: "recdRxBsE14Rr2VuJ",
    title: "Xiaomi Redmi Note 2",
    price: "699.99",
    img: "https://dl.airtable.com/.attachments/bae9208dc34f35128749ecda5b999e84/337c285d/phone-3_h2s6fo.png",
    amount: 1,
    status: true,
  },
  {
    id: "recwTo160XST3PIoW",
    title: "Samsung Galaxy S7",
    price: "599.99 ",
    img: "https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png",
    amount: 1,
    status: true,
  },
];

const sum = (dataCart) => {
  let totalNumber = 0;
  let totalPrice = 0;
  for (let i of dataCart) {
    totalNumber += i.amount;
    totalPrice += i.price * i.amount;
  }

  return { totalNumber, totalPrice };
};

function index(props) {
  const { totalNumber, totalPrice } = sum(dataFake);
  const [dataCart, setDataCart] = useState(dataFake);
  const [total, setTotal] = useState(totalPrice);
  const [totalBag, setTotalBag] = useState(totalNumber);

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await getDataCart();
  //     if (data) {
  //       setDataCart(data);
  //     }
  //   };
  //   getData();
  // }, []);

  const handlePeItem = (id) => {
    let newData = [];
    let totals = 0;
    let numbers = 0;
    for (let item of dataCart) {
      if (item.id == id) {
        totals += (item.amount + 1) * item.price;
        numbers += item.amount + 1;
        newData.push({
          ...item,
          amount: item.amount + 1,
        });
      } else {
        (totals += item.amount * item.price), (numbers += item.amount);
        newData.push(item);
      }
    }
    setDataCart(newData);
    setTotal(totals);
    setTotalBag(numbers);
  };

  const handleInPreItem = (id) => {
    let newData = [];
    let totals = 0;
    let numbers = 0;
    for (let item of dataCart) {
      if (item.id == id) {
        if (item.amount - 1 > 0) {
          numbers += item.amount - 1;
          totals += (item.amount - 1) * item.price;
          newData.push({
            ...item,
            amount: item.amount - 1,
          });
        } else {
          newData.push({
            ...item,
            status: false,
            amount: item.amount - 1,
          });
        }
      } else {
        numbers += item.amount;
        totals += item.amount * item.price;
        newData.push(item);
      }
    }
    setDataCart(newData);
    setTotal(totals);
    setTotalBag(numbers);
  };

  const remoteItem = (id) => {
    // const newItems = [...dataCart];

    // const deleteItems = newItems.filter((e) => e.id !== seleted);

    // setDataCart(deleteItems);
    let newData = [];
    let totals = 0;
    let numbers = 0;
    for (let item of dataCart) {
      const result = window.confirm("Bạn có chắc không?");
      if (!result) return;
     
        if (item.id == id) {
          newData.push({
            ...item,
            status: false,
            amount: 0,
          });
        } else {
          numbers += item.amount;
          totals += item.amount * item.price;
          newData.push(item);
        }
     
    }

    setDataCart(newData);
    setTotal(totals);
    setTotalBag(numbers);
  };

  const deleteAllItems = () => {
    const newItems = [...dataCart];
    const deleteItems = newItems.filter((e) => console.log(e));
    setDataCart(deleteItems);
    setTotal(0);
    setTotalBag(deleteItems.length);
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
              paddingTop: "20px",
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
      {dataCart.map((item, index) =>
        item.status ? (
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
                <Button
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
                </Button>
                {/* <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                      <p style={{textAlign: "center", fontSize: "20px", marginTop: '20px'}}>Bạn có chắc chắn muốn xóa?</p>
                  </Modal> */}
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
              <div style={{ paddingLeft: "10px" }}>{item.amount}</div>
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
        ) : null
      )}

      {dataCart.length > 0 ? (
        <>
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
        </>
      ) : (
        <h3
          style={{ fontWeight: "bold", letterSpacing: 2.5, margin: "0 auto" }}
        >
          is currently empty
        </h3>
      )}
    </Row>
  );
}

export default index;
