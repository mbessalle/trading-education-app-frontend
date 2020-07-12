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
        <Navbar.Brand href="#home">Trading App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Link to='/login'>
          <Button variant="outline-info">Log In</Button>
        </Link>
      </Navbar>
      <Jumbotron>
        <UserDock />
        <h1>courses</h1>
      </Jumbotron>
      <Container>
        <CardDeck>{coursesJSX}</CardDeck>
      </Container>
      <Chart />
    </>
  );
}
