import React from "react";
import "./App.css";
import Courses from "./pages/Courses";
import { Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import UserDock from "./components/UserDock";

function App() {
  return (
    <div className="App">
      <h1>Trading App</h1>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={SignUp} />
        <Route path="/" component={Courses} />
        <Route path="/" component={UserDock} />
      </Switch>
    </div>
  );
}

export default App;
