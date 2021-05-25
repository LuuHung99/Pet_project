import React, { useState, useEffect } from "react";
import { Row, Col, Alert, Button, Space } from "antd";
import { getDataQuiz } from "./api";
function Quiz(props) {
  const [quiz, setQuiz] = useState([]);
  const [index, setIndex] = useState(1);
  const [listAnswer, setListAnswer] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState(1);
  const [totalAnswer, setTotalAnswer] = useState(20);
  const [grade, setGrade] = useState(0);

  const getData = async () => {
    const data = await getDataQuiz();
    if (data.results) {
      setQuiz(data.results);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (0 < quiz.length && index < 20) {
      // const arrayAnswer = quiz[index].correct_answer.split(",");
      // const listAnswers = quiz[index].incorrect_answers.concat(arrayAnswer);
      // setListAnswer(listAnswers);
      const random = parseInt((Math.random() * 10) % 6);
      const arrayAnswer = quiz[index].incorrect_answers;

      quiz[index].incorrect_answers.splice(
        random,
        0,
        quiz[index].correct_answer
      );

      setListAnswer(arrayAnswer);
    }
  }, [quiz[index]]);

  const handleChangeQuestion = (index) => {
    setIndex(index + 1);
    setCurrentAnswer(index + 1);
  };

  const handleNextQuestion = (item) => {
    console.log(item, listAnswer[item]);
    console.log(quiz[index].correct_answer);

    if (listAnswer[item] == quiz[index].correct_answer) {
      setIndex(index + 1);
      setCurrentAnswer(index + 1);
      setGrade(grade + 10);
      // console.log(true);
    } else {
      setIndex(index + 1);
      setCurrentAnswer(index + 1);
      // console.log(false);
    }
  };

  const resetQuestion = () => {
    setIndex(0);
    setCurrentAnswer(0);
    setGrade(0);
  };

  return (
    <>
      <Row
        style={{
          padding: "100px",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {index< 20 && <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "18px",
            color: "green",
          }}
        >
          <div>Grade: {grade} </div>
          <div>
            Correct Answers : {currentAnswer}/{totalAnswer}
          </div>
        </Col>}
        {index < totalAnswer ? (
          <div style={{textAlign: "center"}}>
            <Col
              span={24}
              style={{ marginTop: "30px" }}
              onClick={() => handleNextQuestion(index)}
            >
              <h1
                style={{
                  fontSize: 42,
                  fontWeight: "bold",
                }}
              >
                {quiz.length > 0 && quiz[index].question}
              </h1>
            </Col>

            {listAnswer.length > 0
              ? listAnswer.map((item, index) => (
                  <Col span={12} style={{margin: '0 auto'}}  key={index}>
                    <button
                      onClick={() => handleNextQuestion(index)}
                      className="answer"
                      style={{
                        width: "600px",
                        marginBottom: "20px",
                        height: "auto",
                        border: "none",
                        backgroundColor: "#8bcbf9",
                        letterSpacing: 2,
                        fontSize: 17,
                        cursor: "pointer",
                        borderRadius: "5px",
                        padding: "5px 0px",
                      }}
                    >
                      {item}
                    </button>
                  </Col>
                ))
              : null}

           
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAxNlqFQwo1gpn6ZuquBFHg8ytWFU5wNgKg&usqp=CAU"
              alt="conguration"
              style={{ width: "100%", height: "100%" }}
            />
            <h2 style={{ marginTop: "30px", color: "yellowgreen" }}>
              Chúc mừng bạn đã hoàn thành câu hỏi:
            </h2>
            {/* <h2 style={{    color: "chocolate"}}>Điểm số</h2> */}
            <p style={{ fontSize: "26px", color: "blueviolet" }}>{grade}</p>
            <button
              onClick={resetQuestion}
              style={{
                height: "auto",
                width: "400px",
                backgroundColor: "#ffb100",
                border: "none",
                fontSize: "17px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "20px",
                padding: "5px 0px",
                color: "#222",
              }}
              className="next-quiz"
            >
              Play Again
            </button>
          </div>
        )}
        {index < 20 &&  <Col
              span={24}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <button
                onClick={() => handleChangeQuestion(index)}
                style={{
                  height: "auto",
                  width: "400px",
                  backgroundColor: "#ffb100",
                  border: "none",
                  fontSize: "17px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginTop: "20px",
                  padding: "5px 0px",
                }}
                className="next-quiz"
              >
                Next Question
              </button>
            </Col>}
      </Row>
    </>
  );
}

export default Quiz;
