import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { selectToken, selectUsername } from "../../store/user/selector";
import { getUserWithStoredToken, logOut } from "../../store/user/action";
import { useDispatch, useSelector } from "react-redux";

export default function Dock() {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, []);

  return (
    <div style={{ color: "white" }}>
      {username ? `Welcome, ${username}` : null}
      {token ? (
        <Link to="/" style={{ padding: "0.5rem" }}>
          <Button onClick={() => dispatch(logOut())} variant="outline-info">
            Log Out
          </Button>
        </Link>
      ) : (
        <a href="/login" style={{ padding: "0.6rem" }} replace>
          <Button variant="outline-info">Log In</Button>
        </a>
      )}
      <a href="/signUp">
        {!token ? <Button variant="success">SIGN UP NOW!</Button>:null}
      </a>
    </div>
  );
}
// {token ? <Nav.Link href="/trades">Trades</Nav.Link> : null}