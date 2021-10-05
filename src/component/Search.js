import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import "./Search.css";

const Search = () => {
  let [Data, setData] = useState([]);
  const [search, setsearch] = useState("");

  const [filtstate, setFiltState] = useState([]);

  useEffect(() => {
    fetch("https://data.covid19india.org/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(
          data.statewise.filter(
            (a) => a.state !== "State Unassigned" && a.state !== "Total"
          )
        );
      });
  }, []);

  useEffect(() => {
    if (search === "") {
      setFiltState([]);
    } else {
      setFiltState(
        Data.filter((a) => a.state.toLowerCase().includes(search.toLowerCase()))
      );
    }
  }, [search]);

  return (
    <div>
      <Container style={{ marginTop: "50px" }}>
        <br />
        <h5 className="heading">Search Statewise : </h5>
        <Container>
          <div style={{ textAlign: "center" }}>
            <i className="fa fa-search icon"></i>
            <input
              className="w-75 mr-auto ml-auto search "
              type="text"
              placeholder=" Enter a State/UT"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>

          <div>
            {filtstate.map((a) => {
              return (
                <div className="mt-4 mb-5" key={a.state}>
                  <Card className="totalCard">
                    <Card.Header className="cardHeading">
                      <h3 className="font-italic ">{a.state}</h3>
                    </Card.Header>
                    <Card.Body className="cardBody">
                      <Card.Text>
                        <h6>Total Cases as of {a.lastupdatedtime}</h6>
                      </Card.Text>
                      <Card.Text>
                        <h6>Confirmed : {a.confirmed}</h6>
                      </Card.Text>
                      <Card.Text>
                        <h6>Active : {a.active} </h6>
                      </Card.Text>
                      <Card.Text>
                        <h6>Recovered: {a.recovered} </h6>
                      </Card.Text>
                      <Card.Text>
                        <h6>Deaths : {a.deaths} </h6>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Search;
