import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { fetchCourses } from "../../store/courses/actions";
import { selectCourses } from "../../store/courses/selector";
import Course from "../../components/Course";
import UserDock from "../../components/UserDock";
import Chart from "../../components/Chart";
import { CardDeck } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { apiUrl } from "../../config/constants";

export default function Home() {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);
  console.log("Courses", courses);
  const coursesJSX = courses
    ? courses.map((course) => {
        return (
          <Course
            key={course.id}
            id={course.id}
            name={course.name}
            description={course.description}
            price={course.price}
            imageURL={course.imageURL}
            // videoURL={course.videoURL}
            showLink={(true, course.videoURL)}
          />
        );
      })
    : null;

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="http://localhost:3000">Trading App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="http://localhost:3000">Home</Nav.Link>
          <Nav.Link href="#trades">Trades</Nav.Link>
          <Nav.Link href="#courses">Courses</Nav.Link>
        </Nav>
        <UserDock />
      </Navbar>
      <Jumbotron style={{backgroundColor:'black'}}>
        <h1 style={{color:'white'}}>The complete set of trading knowledge you will need in 4 videos</h1>
      </Jumbotron>
      <Container>
        <CardDeck>{coursesJSX}</CardDeck>
      </Container>
      <Chart />
    </>
  );
}
