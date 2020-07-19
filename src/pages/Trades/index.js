import React, { useState, useRef } from "react";
import { selectToken } from "../../store/user/selector";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Chart from "../../components/Chart";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

export default function Trades() {
  const token = useSelector(selectToken);
  const history = useHistory();
  console.log("token in /trades", token);
  const [price, setPrice] = useState(0);
  const previousPrice = usePrevious(price);
  const priceColor = previousPrice
    ? price - previousPrice > 0
      ? "#36d160"
      : "#de2f2f"
    : "#000";

  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
  }, [token, history]);

  return (
    <>
      <h1 style={{ paddingBottom: "1.5rem" }}>Trades</h1>
      <Badge
        pill
        variant="warning"
        style={{ fontSize: "1.5rem", margin: "auto", textAlign: "center" }}
      >
        BTC/USD crypto chart
      </Badge>{" "}
      <Chart setPrice={setPrice} />
      <p>Current balance:</p>
      <p style={{ fontSize: "1.5rem" }}>
        {" "}
        Current price: <span style={{ color: priceColor }}>{`${price}$`}</span>
      </p>
      <Button style={{ margin: "1rem" }} variant="outline-success">
        Buy BTC
      </Button>
      <Button style={{ margin: "auto" }} variant="outline-danger">
        Sell BTC
      </Button>
      <Table
        striped
        bordered
        hover
        size="sm"
        style={{ width: "60%", textAlign: "center", margin: "auto" }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Execution time</th>
            <th>Trade</th>
            <th>Trade type</th>
            <th>P/L</th>
            <th>BTC amount</th>
            <th>USD amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
