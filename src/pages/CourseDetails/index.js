import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../store/courses/actions";
import { selectCourses } from "../../store/courses/selector";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function CourseDetails() {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);
  const { id } = useParams();
  const course = courses.find((c) => c.id == id);
  console.log("Courses", courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <>
      {course ? (
        <>
          <h1>{course.name}</h1>
          <Image
            style={{ margin: "auto", paddingBottom: "2.5rem" }}
            src={course.imageURL}
            fluid
          />
          <br></br>
          <a href={course.videoURL}>
            <Button
              style={{ paddingTop: "2.5 rem", margin: "auto" }}
              type="primary"
            >
              BUY NOW!
            </Button>
          </a>
          <p
            style={{
              fontSize: "1.75rem",
              maxWidth: "1000px",
              margin: "auto",
              paddingTop: "2.5rem",
            }}
          >
            {course.description}
          </p>
        </>
      ) : (
        "Course Loading..."
      )}
    </>
  );
};
