import React from "react";
import { Table, Container } from "react-bootstrap";
import "./Statewise.css";

export default function Statewise({ StatesData, toggleData }) {
  const MapFunction = (a) => {
    return (
      <tr key={a.state}>
        <td>{a.state}</td>
        <td>{a.confirmed}</td>
        <td>{a.active}</td>
        <td>{a.recovered}</td>
        <td>{a.deaths}</td>
      </tr>
    );
  };

  return (
    <>
      <Container>
        <h5 className=" mb-4 head">State Wise Cases :</h5>
        <Table
          className={
            toggleData
              ? "table table-bordered table-striped table-dark "
              : "table table-bordered table-striped"
          }
          bordered
          hover
          responsive="sm"
        >
          <thead>
            <tr className={toggleData ? "" : " tableRowHead "}>
              <th>State/UT</th>
              <th>Confirmed</th>
              <th>Active</th>
              <th>Recovered</th>
              <th>Deceased</th>
            </tr>
          </thead>
          <tbody>{StatesData.map(MapFunction)}</tbody>
        </Table>

        <div className="d-flex justify-content-end">
          <div>
            <p className="mt-3">
              Last Updated Date :{" "}
              <span className="font-weight-bold">
                {StatesData[0].lastupdatedtime.substring(0, 10)}
              </span>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
