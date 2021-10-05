import React, { useState, useEffect } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import "./Search.css";

const DateSearch = (props) => {
  const [data, setData] = useState([]);
  const [inpdata, setInpData] = useState("");
  const [filtdat, setFiltData] = useState([]);
  const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    fetch("https://data.covid19india.org/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.cases_time_series);
        setLatestData(
          data.cases_time_series[data.cases_time_series.length - 1].dateymd
        );
      });
  }, []);

  function buttonFunc(e) {
    e.preventDefault();
    if (inpdata === "") {
      setFiltData("");
    } else {
      let a = data.filter((a) => a.dateymd === inpdata);
      setFiltData(a);
    }
  }

  return (
    <div>
      <Container style={{ marginTop: "50px" }}>
        <br />
        <h5 className="heading ">Daily Covid Cases : </h5>
        <div style={{ textAlign: "center" }} className="mt-4">
          <Form className="w50 mr-auto ml-auto text-center">
            <Form.Control
              type="date"
              onChange={(e) => setInpData(e.target.value)}
              min="2020-01-30"
              max={latestData}
              className="w-50 mr-auto ml-auto"
              required
            />

            <button
              onClick={buttonFunc}
              variant="info"
              className={
                props.buttonColor
                  ? "btn btn-light mt-4 p-2 pl-3 pr-3"
                  : "btn btn-info mt-4 p-2 pl-3 pr-3"
              }
              disabled={inpdata.length === 0}
            >
              Search
            </button>
          </Form>
        </div>
        <div className="mt-5">
          {filtdat.map((a) => {
            return (
              <>
                <Card className="totalCard">
                  <Card.Header className="cardHeading">
                    <h4 className="font-italic font-weight-bold">
                      Registered Cases
                    </h4>
                  </Card.Header>
                  <Card.Body className="cardBody">
                    <Card.Text>
                      <h6>Confirmed Cases : {a.dailyconfirmed}</h6>
                    </Card.Text>
                    <Card.Text>
                      <h6>Recovered Cases : {a.dailyrecovered}</h6>
                    </Card.Text>
                    <Card.Text>
                      <h6>Deceased Cases : {a.dailydeceased}</h6>
                    </Card.Text>
                    <Card.Text>
                      <p
                        style={{
                          marginBottom: "-10px",
                          color: "black"
                        }}
                      >
                        {a.date}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
                <br />
              </>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default DateSearch;
