import React, { useEffect, useState } from "react";
import MainHome from "./MainHome";
import Header from "./component/Header/Header";
import Search from "./component/Search";
import { Switch, Route } from "react-router-dom";
import DateSearch from "./component/DateSearch";
import "./App.css";
import Quiz from "./component/Quiz";
import Guidelines from "./component/Guidelines/Guidelines";

const App = () => {
  const [mode, setMode] = useState(getMode);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(mode));
  }, [mode]);

  function getMode() {
    const modeValue = JSON.parse(localStorage.getItem("dark"));
    return modeValue || false;
  }

  useEffect(() => {
    localStorage.setItem("toggle", mode);
  }, [mode]);

  function clickFunc() {
    setMode(!mode);
    if (mode === "false") {
      document.body.classList.add(".dark-mode");
    } else {
      document.body.classList.remove("dark");
    }
  }

  return (
    <>
      <div className={mode ? "dark-theme" : ""} style={{ marginTop: "0px" }}>
        <Header click={clickFunc} iconChange={mode} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <MainHome Toggledata={mode} />}
          />
          <Route exact path="/search" component={Search} />
          <Route
            exact
            path="/search/date"
            component={() => <DateSearch buttonColor={mode} />}
          />
          <Route exact path="/guidelines" component={Guidelines} />
          <Route exact path="/guidelines/quiz" component={Quiz} />
        </Switch>
      </div>
    </>
  );
};

export default App;
