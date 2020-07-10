import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("JWT", response.data.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSignUp = async (e) => {
    try {
      const response = await axios.post("http://localhost:4000/auth/signup", {
        email,
        password,
      });
      localStorage.setItem("JWT", response.data.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Link to="/">
          <Button onClick={handleSignUp} variant="primary">
            Sign up
          </Button>
        </Link>
        <Link to="/">
          <Button onClick={handleLogin} variant="primary">
            Log in
          </Button>
        </Link>
      </Form>
    </>
  );
}
