import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { api } from "./service/callApi";
import { Card, Row, Col, Skeleton, Button, Pagination } from "antd";

const { Meta } = Card;

function Content(props) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [users, setListUsers] = useState([]);
  const [previousPage, setPreviousPage] = useState(false);
  const [nextPage, setNextPage] = useState(false);

  useEffect(() => {
    //Viet ham de lay du lieu tu api ve
    const getData = async () => {
      setLoading(true); //Bat dau call vao api get data
      const dataUsers = await api.getListUserApi(page);
      if (dataUsers) {
        //cap nhat lai data users
        setListUsers(dataUsers.data);
        //Cap nhat totalItems
        setTotalItems(dataUsers.totalItems);
        //Cap nhat totalPage
        setTotalPage(dataUsers.total_pages);
        //Cap nhat lai loadings
        setLoading(false);

        //Xu ly phan trang
        if (page < 1) {
          setPage(1);
        } else if (page > dataUsers.total_pages) {
          setPage(dataUsers.total_pages);
        }

        //Kiem tra hien thi nut previous
        if (page > 1) {
          setPreviousPage(true);
        } else {
          setPreviousPage(false);
        }
        //Kiem tra hien nut nextPage
        if (page < dataUsers.total_pages) {
          setNextPage(true);
        } else {
          setNextPage(false);
        }
      }
    };
    getData(); //Goi ham api ra su dung
  }, [page]);

  if (loading || users.length === 0) {
    //chua co du lieu - dang loadings
    return <Skeleton active />;
  }

  //Viet ham chuyen trang
  const previousAndNextPage = (type) => {
    // type: Biet duoc dang bam vao nut nao
    if (type === "previous") {
      //Cap nhat giam state page xuong 1
      if (page > 1) {
        setPage(page - 1);
      }
    } else if (type === "next") {
      if (page < totalPage) {
        setPage(page + 1);
      }
    }
  };

  const changePage = (pages) => {
    setPage(pages);
  }

  return (
    <>
      <Row style={{ margin: "20px 0px" }}>
        {users.map((e, idx) => (
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 220 }}
              cover={<img alt="example" src={e.avatar} style={{height: 200}} />}
            >
              <Meta title={e.first_name} description={e.last_name} />
              <h4>{e.email}</h4>
            </Card>
          </Col>
        ))}
      </Row>
      <Row style={{ margin: " 20px 0px", textAlign: "center" }}>
        <Col span={12} offset={6}>
          {previousPage && <Button type="primary" onClick = {()=>previousAndNextPage('previous')}>Previous</Button>}
          {nextPage && (
            <Button type="primary" style={{ marginLeft: "10px" }} onClick = {()=>previousAndNextPage('next')}>
              Next
            </Button>
          )}
        </Col>
      </Row >
      <Row style={{ margin: " 20px 0px", textAlign: "center" }}>
            <Col span={24}>
                <Pagination current={page} pageSize={3} total={totalItems} onChange={(pages) => changePage(pages)} />
            </Col>
      </Row>
    </>
  );
}

export default React.memo(Content);
