import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

export default function Course(props) {
  // const { title, imageUrl, bids } = props.artwork;
  return (
    <Jumbotron>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <Image src={props.videoURL} />
      {props.showLink ? (
        <Link to={`/courses/${props.userId}`}>
          <Button>View details</Button>
        </Link>
      ) : null}
    </Jumbotron>
  );
}
