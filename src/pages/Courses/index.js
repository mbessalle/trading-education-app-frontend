import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { fetchCourses } from "../../store/courses/actions";
import { selectCourses } from "../../store/courses/selectors";
import Course from "../../components/Course";

export default function Home() {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);
  console.log('Courses', courses)
  const coursesJSX = courses
    ? courses.map((course) => {
        return (
          <Course
            key={course.id}
            id={course.id}
            name={course.name}
            description={course.description}
            image={course.videoURL}
            // description={artwork.description}
            // backgroundColor={artwork.backgroundColor}
            // color={artwork.color}
            showLink={true}
          />
        );
      })
    : null;

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <>
      <Jumbotron>
        <h1>courses</h1>
      </Jumbotron>
      <Container>{coursesJSX}</Container>
    </>
  );
}