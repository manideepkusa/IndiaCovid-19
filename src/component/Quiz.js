import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Quiz.css";

export default function Quizz() {
  const [change, setChange] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);

  const questions = [
    {
      QuestionText:
        "Currently, which group has had more severe effects of COVID-19?",
      answerOptions: [
        { answerText: "Men", value: false },
        { answerText: "Women", value: true }
      ]
    },

    {
      QuestionText:
        "True or false: COVID-19 has currently been detected on all seven continents.",
      answerOptions: [
        { answerText: "True", value: false },
        { answerText: "False", value: true }
      ]
    },

    {
      QuestionText:
        "Can you protect yourself against COVID-19 by washing your hands?",
      answerOptions: [
        {
          answerText: "Yes, but only if a strong bleach is used.",
          value: false
        },
        {
          answerText:
            "YYes, regular soap and water or hand sanitizer will suffice.",
          value: true
        },
        {
          answerText: "No, washing your hands doesn't really destroy COVID-19.",
          value: false
        }
      ]
    },

    {
      QuestionText:
        "True or False: A vaccine stimulates your immune system to produce antibodies, like it would if you were exposed to the virus.",
      answerOptions: [
        { answerText: "True", value: true },
        { answerText: "False", value: false }
      ]
    },
    {
      QuestionText:
        "Physical distancing is indicated by which of the  following ?",
      answerOptions: [
        {
          answerText:
            "You stop going to crowded places and visiting other people’s houses",
          value: true
        },
        {
          answerText: "You stop talking to the people you live with",
          value: false
        },
        {
          answerText: "You stop speaking to your friends on the phone",
          value: false
        }
      ]
    }
  ];

  const questionChange = (valuePassed) => {
    if (valuePassed === true) {
      setTotalCorrect(totalCorrect + 1);
    }

    const update = change + 1;

    if (update <= questions.length) return setChange(update);
  };

  const toTakeRetest = () => {
    setChange(0);
    setTotalCorrect(0);
  };

  return (
    <div className="text-center mt-4">
      <Container>
        <div
          className="w-75 h-25 positionDiv"
          style={{
            position: "absolute",
            marginLeft: "-10px",
            borderRadius: "0px 0px 200px 15px",
            zIndex: "-1"
          }}
        />
        <h5 className="text-left p-2">Quizz</h5>
        {questions.length === change ? (
          <div>
            <Card
              className="w-75 ml-auto mr-auto mb-4 cardBackgroundColor"
              style={{ height: "200px", borderRadius: "20px 30px 25px 120px" }}
            >
              <Card.Body>
                <Card.Text>
                  <h6 className="text-info mt-4">
                    You have answered <b> {totalCorrect} </b> correct
                  </h6>
                </Card.Text>
                <Card.Text>
                  <p style={{ color: "green", marginTop: "30px" }}>
                    you have scored{" "}
                    <b>
                      {Math.round((totalCorrect / questions.length) * 100)}%
                    </b>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Button className="bg-info" onClick={toTakeRetest}>
              Re-Test
            </Button>
          </div>
        ) : (
          <div>
            <Row>
              <Col sm={12} md={6}>
                <div>
                  <Card
                    className="p-4 mb-3 mt-3 cardBackgroundColor"
                    style={{
                      borderRadius: "15px",
                      boxShadow: "#2b6777  0px 13px 27px -10px"
                    }}
                  >
                    <Card.Body className="p-4 ">
                      <Card.Text className="text-info">
                        <div>
                          Question : {change + 1}/{questions.length}
                        </div>
                      </Card.Text>
                      <Card.Text className="text-info">
                        <b>{questions[change].QuestionText}</b>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col sm={12} md={6}>
                {questions[change].answerOptions.map((e) => (
                  <div>
                    <p
                      className="w-75 mr-auto ml-auto mt-3 p-2 text-info cardBackgroundColor"
                      style={{
                        outline: "none",
                        cursor: "pointer",
                        borderRadius: "10px",

                        boxShadow: "#2b6777  20px 13px 20px -10px"
                      }}
                      onClick={() => questionChange(e.value)}
                    >
                      {e.answerText}
                    </p>
                  </div>
                ))}
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
}
