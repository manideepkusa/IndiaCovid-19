import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import "./Chart.css";

function Chart() {
  const [date, setDate] = useState([]);
  const [dailyconfirm, setDailyConfirm] = useState([]);
  const [dailyrecov, setDailyRecov] = useState([]);
  const [dailydeath, setDailyDeath] = useState([]);

  const [dropdrown, setDropDown] = useState(2);

  useEffect(() => {
    fetch(`https://data.covid19india.org/data.json`)
      .then((resp) => resp.json())
      .then((data) => {
        setDate(data.cases_time_series.map((a) => a.date));
        setDailyConfirm(data.cases_time_series.map((a) => a.dailyconfirmed));
        setDailyRecov(data.cases_time_series.map((a) => a.dailyrecovered));
        setDailyDeath(data.cases_time_series.map((a) => a.dailydeceased));
      });
  }, []);

  const barData = {
    labels: date.slice(-dropdrown),
    datasets: [
      {
        label: "Daily Confirmed",
        data: dailyconfirm.slice(-dropdrown),
        backgroundColor: ["#57a5ff"],
        borderColor: ["#417dfa"],
        borderWidth: 1,
        hoverBackgroundColor: ["#3463fa"]
      },
      {
        label: "Daily Recovered",
        data: dailyrecov.slice(-dropdrown),
        backgroundColor: ["#89f77e"],
        borderColor: ["#1cfa07"],
        borderWidth: 1,
        hoverBackgroundColor: ["#35fc6a"]
      },
      {
        label: "Daily Deaths",
        data: dailydeath.slice(-dropdrown),
        backgroundColor: ["#8e9094"],
        borderColor: ["#0d0d0d"],
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <>
      <Container>
        <h5 className="font-weight-bold text-center head">
          India <i className="fas fa-virus"></i>
          <span className="spreadStyle">&nbsp;Spread</span> <i>Trends</i>
        </h5>
        <div className="w-40 mt-4 d-flex justify-content-end">
          <select
            className="selectClass"
            onChange={(e) => setDropDown(e.target.value)}
          >
            <option selected value="2">
              Last 2 Days
            </option>
            <option value="7">Last 7 Days</option>
            <option value="14">Last 14 days</option>
          </select>
        </div>
        <br />
        <div style={{ height: "400px" }}>
          <Bar data={barData} options={chartOptions} />
        </div>
        <br />
      </Container>
    </>
  );
}

export default Chart;
