import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";



export default function Course(props) {
  return (
    <Jumbotron>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>Price: {props.price} BTC</p>
      {props.showLink ? (
        <a href={props.showLink}>
          <Button>Go To Video</Button>
        </a>
      ) : null}
    </Jumbotron>
  );
}
