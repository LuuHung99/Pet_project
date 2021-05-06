import React, { useState } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const listQuestion = [
  {
    id: 1,
    title: "Do I have to allow the use of cookes?",
    infor:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    id: 2,
    title: "How do I change my My Page password?",
    infor:
      "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    title: "What is BankID?",
    infor:
      "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 4,
    title: "Whose birth number can I use?",
    infor:
      "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
  {
    id: 5,
    title: "When do I recieve a password ordered by letter?",
    infor:
      "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan",
  },
];

function Accoring(props) {
  const [data, setData] = useState(listQuestion);
  const [showData, setShowData] = useState(true);
  // const [icon, setIcon] = useState(true);

  const showQuestion = (id) => {
    console.log(id);
    setShowData(false);
  };

  const hideQuestion = (id) => {
    console.log(id);
    setShowData(true);
  };

  return (
    <div className="container__accordion">
      <div className="row_accordion">
        {/* <h2>Questions And Answers About Login</h2>   */}
        {data.map((e) => (
          <Row>
            <Col span={15} offset={6} className="infor">
              {showData  ? (
                <div className="question">
                  <h3>{e.title}</h3>

                  {/* <p>{e.infor}</p> */}
                  <div className="icon">
                    <PlusOutlined onClick={() => showQuestion(e.id)} />
                    {/* <MinusOutlined
                      className=""
                      onClick={() => hideQuestion(e.id)}
                    /> */}
                  </div>
                </div>
              ) : (
                <div className="question">
                  <h3>{e.title}</h3>

                  <p>{e.infor}</p>
                  <div className="icon">
                    {/* <PlusOutlined onClick={() => showQuestion(e.id)} /> */}
                    <MinusOutlined
                      className=""
                      onClick={() => hideQuestion(e.id)}
                    />
                  </div>
                </div>
              )}
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
}

export default Accoring;
