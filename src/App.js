import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import UserDock from "./components/UserDock";
import CourseDetails from "./pages/CourseDetails";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Trades from "./pages/Trades";
import { useSelector } from "react-redux";
import { selectToken } from "./store/user/selector";

function App() {
  const token = useSelector(selectToken);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Mois's Trading App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {token ? <Nav.Link href="/trades">Trades</Nav.Link> : null}
        </Nav>
        <UserDock />
      </Navbar>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/course/:id" component={CourseDetails} />
        <Route path="/trades" component={Trades} />
        <Route path="/" component={Courses} />
      </Switch>
    </div>
  );
}

export default App;
