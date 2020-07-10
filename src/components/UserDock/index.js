import React from "react";
import { Button } from "react-bootstrap";

export default function Dock() {
  const token = localStorage.getItem("JWT");
  console.log();
  return (
    <>
      {token ? "Authenticated" : "NOT AUTHENTICATED"}
      <a href="http://localhost:3000/">
        <Button
          onClick={() => {
            localStorage.removeItem("JWT");
          }}
        >
          Log out
        </Button>
      </a>
      <a href="http://localhost:3000/login">
        <Button>Log in</Button>
      </a>
    </>
  );
}
