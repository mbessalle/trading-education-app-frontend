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
import { Image } from "react-bootstrap";
import logo from "./assets/logo_turtle_transparent.png";

function App() {
  const token = useSelector(selectToken);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          {/* <img
            src="https://melmagazine.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-31-at-5.47.12-PM.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /> */}
          <Image src={logo} width="70" height="70"></Image>
        </Navbar.Brand>
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
      <div style={{margin:'auto', paddingTop:'1.5rem'}}>
      </div>
    </div>
  );
}

export default App;
