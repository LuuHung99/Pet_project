import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import LoadingPage from "./loading";
import {Button} from "antd";

const url = "https://course-api.com/react-tours-project";

function ListTour(props) {
  const [loadingHome, setLoadingHome] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoadingHome(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setLoadingHome(false);
      setData(result);

    } catch (err) {
      setLoadingHome(false);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loadingHome) {
    return <LoadingPage />;
  }

  if(data.length === 0) {
    return (
      <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontWeight: "bold",
          fontSize: "40px",
        }}
      >
        No Tours Left
      </h1>
      <div style={{textAlign: "center"}}>
        <Button type="primary" onClick={() =>fetchData()}>Refresh</Button>
      </div>
      </>
    )
  }
  
  function deleteItems(id) {
    const newList = data.filter((e) => {
      if (e.id != id) return e;
    });
    setData(newList);
  }

  return (
    <>
      <div className="wrapper">
        <Tours tours={data} deleteItems={deleteItems} />
      </div>
    </>
  );
}

export default ListTour;
