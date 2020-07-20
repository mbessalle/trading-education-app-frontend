import React, { useState, useRef, useReducer } from "react";
import { selectToken } from "../../store/user/selector";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Chart from "../../components/Chart";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import axios from "axios";
import { apiUrl } from "../../config/constants";

export default function Trades() {
  const token = useSelector(selectToken);
  const history = useHistory();
  console.log("token in /trades", token);
  const [price, setPrice] = useState(0);
  const [trades, setTrades] = useState("[]");
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

  const fetchData = () => {
    axios
      .get(`${apiUrl}/tradeData/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setTrades(JSON.stringify(response.data));
      });
  };

  useEffect(fetchData, []);

  async function TradeHandler(type) {
    const trade = await axios.post(
      `${apiUrl}/tradeData/`,
      { type, price },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(trade.data);
    const tradeData = JSON.parse(trades);
    tradeData.push(trade.data);
    setTrades(JSON.stringify(tradeData));
  }

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
      <Button
        style={{ margin: "1rem" }}
        variant="outline-success"
        onClick={() => TradeHandler("BUY")}
      >
        Buy BTC
      </Button>
      <Button
        style={{ margin: "auto" }}
        variant="outline-danger"
        onClick={() => TradeHandler("SELL")}
      >
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
            <th>Execution time</th>
            <th>Trade type</th>
            <th>P/L</th>
            <th>BTC amount</th>
            <th>USD amount</th>
          </tr>
        </thead>
        <tbody>
          {JSON.parse(trades).map((trade) => (
            <tr key={trade.id}>
              <td>{trade.executionTime}</td>
              <td>{trade.USDamount > 0 ? "SELL" : "BUY"}</td>
              <td>0</td>
              <td>{trade.BTCamount}</td>
              <td>{trade.USDamount}</td>
            </tr>
          ))}
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
