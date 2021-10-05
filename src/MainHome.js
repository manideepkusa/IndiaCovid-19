import { useEffect, useState } from "react";
import "./styles.css";
import Statewise from "./component/Statewise";

import Footer from "./component/Footer/Footer";
import Chart from "./component/Chart/Chart";
import TotalCases from "./component/TotalCases";
import Spinner from "./component/Spinner";

export default function MainHome(props) {
  let [Data, setData] = useState([]);
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    fetch("https://data.covid19india.org/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(
          data.statewise.filter(
            (a) => a.state !== "State Unassigned" && a.state !== "Total"
          )
        );
      })
      .catch()
      .finally(() => setSpin(false));
  }, []);

  if (spin) {
    return <Spinner />;
  }
  return (
    <div className="App">
      <TotalCases />
      <Statewise StatesData={Data} toggleData={props.Toggledata} />
      <br />
      <Chart />
      <Footer />
    </div>
  );
}
