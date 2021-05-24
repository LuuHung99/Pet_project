import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const dataQuestions = [
  {
    id: "1",
    title: "Do You Accept All Major Credit Cards?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
  },
  {
    id: "2",
    title: "Do You Suppport Local Farmers?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
  },
  {
    id: "3",
    title: "Do You Use Organic Ingredients?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
  },
];

function Counter(props) {
  const [data, setData] = useState(dataQuestions);
  const [showContent, setShowContent] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const handleClickShow = (selected) => {
    console.log(selected);

    if (selected) {
      setShowContent(true);
      setShowIcon(true);
    }
  };

  const handleClickHide = (selected) => {
      console.log(selected);
    if (selected) {
      setShowContent(false);
      setShowIcon(false);
    }
  };
  return (
    <div
      style={{
        margin: "0 auto",
        height: "auto",
        width: "700px",
        marginTop: "70px",
      }}
    >
      <h2
        style={{
          color: "#c59d5f",
          fontFamily: "Great Vibes, cursive",
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        General Questions
      </h2>
      {
        
      data.map((item) =>  (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "60px",
              width: "100%",
              height: "100%",
              boxShadow:
                "0 4px 8px 0 rgb(0 0 0 / 20%), 0 8px 20px 0 rgb(0 0 0 / 19%);",
              backgroundColor: "#c5c8cc",
              padding: "20px",
            }}
          >
            <div>
              <h2>{item.title}</h2>

              {showContent ? <p>{item.text}</p> : null}
            </div>
            <div style={{ cursor: "pointer" }}>
              {!showIcon ? (
                <PlusOutlined onClick={() => handleClickShow(item.id)} />
              ) : null}
              {showIcon ? (
                <MinusOutlined onClick={() => handleClickHide(item.id)} />
              ) : null}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Counter;
