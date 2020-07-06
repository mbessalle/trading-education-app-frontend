import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Courses from "./pages/Courses";
import { selectAppLoading } from "./store/appState/selectors";
import { Jumbotron } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Trading App</h1>
      <Switch>
        <Route path="/" component={Courses} />
      </Switch>
    </div>
  );
}

export default App;
