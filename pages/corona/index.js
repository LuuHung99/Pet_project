import React, { useState, useEffect } from "react";
import { Row, Col, Input, Button } from "antd";
const { Search } = Input;

function randomColor() {
  const LIST_COLOR = ["red", "green", "yellow", "blue", "gray", "ping"];
  const randomColor = Math.trunc(Math.random() * 6);
  console.log(randomColor);  

  return LIST_COLOR[randomColor];
}

function useChangeColor() {
  const [color, setColor] = useState("green");

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const newColor = randomColor();
      setColor(newColor);
    }, 2000);

    return () => {
      clearInterval(intervalRef);
    };
  }, []);

  return color;
}

function Blog() {
  const color = useChangeColor();
  return (
    <div style={{ backgroundColor: color, width: 200, height: 200 }}></div>
  );

  //     const  deleteItems = (id) => {
  //         const newList = result.filter((e) => {
  //           if (e.id != id) return e;
  //         });
  //       }
  //   return (
  //     <>
  //       <Row style={{ margin: "30px 90px" }}>
  //         <Col span={12}>
  //           <h1 style={{ fontSize: "36px" }}>Search Hacker News</h1>
  //           <Search
  //             placeholder="Search hacker news"
  //             // onSearch={(val) =>searchNews(val)}
  //             enterButton
  //             // value={news}
  //             // onChange={(e) =>setNews(e.target.value)}
  //           />
  //         </Col>
  //       </Row>

  //       <Row style={{ marginTop: "50px" }}>
  //         <Col
  //           span={24}
  //           style={{
  //             display: "flex",
  //             justifyContent: "center",
  //             marginTop: "30px",
  //           }}
  //         >
  //           <Button type="primary">Prev</Button>
  //           <div
  //             style={{ fontWeight: "bold", fontSize: "20px", margin: "0 20px" }}
  //           >
  //             1 of 50
  //           </div>
  //           <Button type="primary">Next</Button>
  //         </Col>
  //       </Row>
  //       <Row
  //         style={{
  //           margin: "50px  90px",
  //           display: "flex",
  //         }}
  //       >
  //         {result.hits.map((item, index) => (
  //           <Col
  //           key={index}
  //             span={11}
  //             style={{
  //               width: "auto",
  //               height: "auto",
  //               backgroundColor: "#D8D8D8",
  //               padding: "10px 20px",
  //               marginRight: "40px",
  //               marginBottom: "30px"
  //             }}
  //           >
  //             <h2>{item.title}</h2>
  //             <p>{item.points} points by dwwoelfel | {item.num_comments} comments</p>
  //             <div>
  //               <Button
  //                 style={{
  //                   border: "none",
  //                   padding: "0px 20px",
  //                   backgroundColor: "#D8D8D8",
  //                   color: "green",
  //                 }}
  //               >
  //                 Read More
  //               </Button>
  //               <Button
  //                 type="none"
  //                 style={{
  //                   border: "none",
  //                   backgroundColor: "#D8D8D8",
  //                   color: "red",

  //                 }}
  //                 onClick={(id) => deleteItems(id)}
  //               >
  //                 Remove
  //               </Button>
  //             </div>
  //           </Col>
  //         ))}
  //       </Row>
  //     </>
  //   );
  // }

  // export async function getStaticProps() {
  //   const res = await fetch("https://hn.algolia.com/api/v1/search?");
  //   const result = await res.json();
  //   console.log(result);
  //   return {
  //     props: { result },
  //   };
  // }
}
export default Blog;
