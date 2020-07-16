import React from "react";
import "./App.css";
import Courses from "./pages/Courses";
import { Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserDock from "./components/UserDock";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#aaa" }}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="http://localhost:3000">Trading App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="http://localhost:3000">Home</Nav.Link>
          <Nav.Link href="http://localhost:3000/trades">Trades</Nav.Link>
        </Nav>
        <UserDock />
      </Navbar>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/course/:id" component={CourseDetails} />
        <Route path="/" component={Courses} />
      </Switch>
    </div>
  );
}

export default App;
