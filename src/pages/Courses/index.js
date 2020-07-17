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
import Badge from "react-bootstrap/Badge";

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
      <Jumbotron style={{ backgroundColor: "black" }}>
        <h1 style={{ color: "white", textAlign: "center" }}>
          Welcome to Mois's trading education web application!
        </h1>
        <h2 style={{ color: "white", textAlign: "center" }}>
          Here, you will find links to purchase educational videos to learn how
          to trade.
        </h2>
        <h2 style={{ color: "white", textAlign: "center" }}>
          Also, if you sign up, you will get access to our interactive trading
          simulation platform to test out your strategies!
        </h2>
      </Jumbotron>
      <Container>
        <CardDeck style={{ margin: "auto", paddingBottom: "2rem" }}>
          {coursesJSX}
        </CardDeck>
      </Container>
      <Badge
        pill
        variant="warning"
        style={{ fontSize: "1.5rem", margin: "auto", textAlign: "center" }}
      >
        BTC/USD crypto chart
      </Badge>{" "}
      <Chart />
    </>
  );
}
