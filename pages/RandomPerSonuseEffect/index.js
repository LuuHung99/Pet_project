import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function RandomPerson(props) {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [value, setValue] = useState("random person");
  const [title, setTitle] = useState("name");
  const getPerson = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results[0]);
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;

    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };
    setPerson(newPerson);
    setLoading(false);
    setTitle("name");
    setValue(newPerson.name);
  };

  useEffect(() => {
    getPerson();
  }, []);
  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };
  return (
    <Row style={{ textAlign: "center", marginTop: "100px" }}>
      <Col
        span={12}
        style={{
          margin: "0 auto",
          width: "auto",
          height: "auto",
          padding: '30px',
          background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
        }}
      >
        <div className="block bcg-black"></div>
        <div className="block">
          <div className="container">
            <img
              src={(person && person.image) || defaultImage}
              alt="random user"
              className="user-img"
              style={{ width: "auto", height: "auto", borderRadius: "50%" }}
            />
            <p className="user-title">My {title} is</p>
            <p
              className="user-value"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              {value}
            </p>
            <div
              className="values-list"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <button
                className="icon"
                data-label="name"
                onMouseOver={handleValue}
                style={{border: 'none',
                  background: 'none',
                  fontSize: '30px',
                  cursor: 'pointer'}}
              >
                <FaUser />
              </button>
              <button
                className="icon"
                data-label="email"
                onMouseOver={handleValue}
                style={{border: 'none',
                  background: 'none',
                  fontSize: '30px',
                  cursor: 'pointer'}}
              >
                <FaEnvelopeOpen />
              </button>
              <button
                className="icon"
                data-label="age"
                onMouseOver={handleValue}
                style={{border: 'none',
                  background: 'none',
                  fontSize: '30px',
                  cursor: 'pointer'}}
              >
                <FaCalendarTimes />
              </button>
              <button
                className="icon"
                className="icon"
                data-label="street"
                onMouseOver={handleValue}
                style={{border: 'none',
                  background: 'none',
                  fontSize: '30px',
                  cursor: 'pointer'}}
              >
                <FaMap />
              </button>
              <button
                className="icon"
                data-label="phone"
                onMouseOver={handleValue}
                style={{border: 'none',
                  background: 'none',
                  fontSize: '30px',
                  cursor: 'pointer'}}
              >
                <FaPhone />
              </button>
              <button
                className="icon"
                data-label="password"
                onMouseOver={handleValue}
                style={{border: 'none',
                  background: 'none',
                  fontSize: '30px',
                  cursor: 'pointer'}}
              >
                <FaLock />
              </button>
            </div>
            <Button
              className="btn"
              type="primary"
              onClick={getPerson}
              style={{ marginTop: "30px", textTransform: "uppercase" }}
            >
              {loading ? "loading..." : "random user"}
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default RandomPerson;
