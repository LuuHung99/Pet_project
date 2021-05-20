import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Col, Skeleton } from "antd";
import "antd/dist/antd.css";
import ListCockTails from "./listCockTails";
import { getDataCockTail } from "./api";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
  },

  searchBar: {
    height: "150px",
    width: "640px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%), 0 8px 20px 0 rgb(0 0 0 / 19%)",
    marginTop: "100px",
    margin: "0 auto",
  },

  title_search: {
    marginTop: "30px",
    marginLeft: "30px",
    fontSize: "20px",
    color: "green",
    fontWeight: "bold",
  },

  input_search: {
    marginTop: "20px",
    width: "190%",
    height: "25%",
    marginLeft: "30px",
    backgroundColor: "#eae7e6",
    border: "none",
  },
  listCockTails: {
    paddingTop: "30px",
    display: "grid",
    gridColumnGap: "30px",
    gridTemplateColumns: "auto auto auto",
  },
}));

function HomePage(props) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const datas = await getDataCockTail(keywords);
      if (datas) {
        setData(datas.drinks);
        setLoading(false);
      }
    };
    getData();
  }, [keywords]);

  // if (loading ) {
  //   return (
  //     <Row style={{ textAlign: "center" }}>
  //       <Col span={24}>
  //         <Skeleton active />
  //       </Col>
  //     </Row>
  //   );
  // }

  // const handleShowDetail = (id) => {
  //   setIsSuccess(false);

  // }
  return (
    <div>
      <div className={classes.container}>
        <Row className={classes.searchBar}>
          <Col>
            <div className={classes.title_search}>
              Search Your Favorite Cocktail
            </div>
            <input
              className={classes.input_search}
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            ></input>
          </Col>
        </Row>
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "40px",
          }}
        >
          <h1>Cocktails</h1>
        </div>
        <div className={classes.listCockTails}>
          {data.map((e, idx) => (
            <ListCockTails item={e} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
