import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { selectToken, selectUsername } from "../../store/user/selector";
import { getUserWithStoredToken, logOut } from "../../store/user/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Dock() {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

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
        <Link to="/login" style={{ padding: "0.6rem" }}>
          <Button variant="outline-info">Log In</Button>
        </Link>
      )}
    </div>
  );
}
