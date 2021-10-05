import React from "react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./TotalCases.css";

const TotalCases = () => {
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [active, setActive] = useState(0);
  const [deaths, setDeaths] = useState(0);

  useEffect(() => {
    fetch("https://data.covid19india.org/data.json")
      .then((data) => data.json())
      .then((res) => {
        setConfirmed(res.statewise[0].confirmed);
        setRecovered(res.statewise[0].recovered);
        setActive(res.statewise[0].active);
        setDeaths(res.statewise[0].deaths);
      });
  }, []);

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <Container>
          <br />
          <h5 className="mb-4 font-weight-bold heading">
            Total Cases Count :{" "}
          </h5>
        </Container>

        <Container className="text-center mb-3">
          <Row>
            <Col className="p-2 rounded mr-2 text-danger">
              <Card bg="text-center" className="cardBodyColor">
                <Card.Body>
                  <Card.Text>
                    <h2 className="rotateanimation">
                      <i className="fas fa-viruses"></i>
                    </h2>
                  </Card.Text>

                  <Card.Text>
                    <b>Active</b>
                  </Card.Text>
                  <Card.Text>
                    <CountUp end={active} duration={3.3} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-2 rounded ml-2 text-info">
              <Card bg="text-center" className="cardBodyColor">
                <Card.Body>
                  <Card.Text>
                    <h2 className="rotateanimation">
                      <i className="fab fa-creative-commons-sampling-plus"></i>
                    </h2>
                  </Card.Text>

                  <Card.Text>
                    <b>Confirmed</b>
                  </Card.Text>

                  <Card.Text>
                    <CountUp end={confirmed} duration={4.2} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-2 rounded mr-2 text-success">
              <Card bg="text-center" className="cardBodyColor">
                <Card.Body>
                  <Card.Text>
                    <h2 className="rotateanimation">
                      <i className="fas fa-user-shield"></i>
                    </h2>
                  </Card.Text>

                  <Card.Text className="font-weight-bold">Recovered</Card.Text>
                  <Card.Text>
                    <CountUp end={recovered} duration={5.3} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-2 rounded ml-2 text-secondary">
              <Card bg="text-center" className="cardBodyColor">
                <Card.Body>
                  <Card.Text>
                    <h2 className="rotateanimation">
                      <i className="fas fa-skull-crossbones"></i>
                    </h2>
                  </Card.Text>

                  <Card.Text className="font-weight-bold">Deaths</Card.Text>
                  <Card.Text className="font-weight-bold">
                    <CountUp end={deaths} duration={4} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TotalCases;
