import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Course(props) {
  return (
    <Card
      style={{
        width: "18rem",
        height: "32rem",
      }}
    >
      <Card.Img variant="top" src={props.imageURL} />
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text style={{ marginTop: "auto", alignSelf: "center" }}>
          This is the basic education one must have to Technically trade. Click
          on the video for further details.
        </Card.Text>
        {props.showLink ? (
          <Card.Link style={{ marginTop: "auto" }}>
            <a href={`/course/${props.id}`}>
              <Button type="primary">View more</Button>
            </a>
          </Card.Link>
        ) : null}
      </Card.Body>
    </Card>
    // {/* <h1>{props.name}</h1> */}
    // {/* <p>{props.description}</p> */}
    // {/* <p>Price: {props.price} BTC</p>
    // {props.showLink ? (
    //   <a href={props.showLink}>
    //     <Button type='primary'>Go To Video</Button>
    //   </a>
    // ) : null} */}
  );
}
