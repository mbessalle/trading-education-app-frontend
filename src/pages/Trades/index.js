import React from "react";
import { selectToken } from "../../store/user/selector";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Chart from "../../components/Chart";

export default function Trades() {
  const token = useSelector(selectToken);
  const history = useHistory();
  console.log("token in /trades", token);

  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
  }, [token, history]);

  return (
    <>
      <h1>Trades</h1>
      <Chart />
    </>
  );
}
