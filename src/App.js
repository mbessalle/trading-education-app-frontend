import React from "react";
import "./App.css";
import Courses from "./pages/Courses";
import { Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserDock from "./components/UserDock";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Courses} />
        <Route path="/" component={UserDock} />
      </Switch>
    </div>
  );
}

export default App;
