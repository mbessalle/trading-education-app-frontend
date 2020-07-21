import React, { useState, useRef } from "react";
import { selectToken, selectUser } from "../../store/user/selector";
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
  const user = useSelector(selectUser);
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
        setTrades(JSON.stringify(tradePL(response.data)));
      });
  };

  useEffect(fetchData, []);

  async function tradeHandler(type) {
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
    setTrades(JSON.stringify(tradePL(tradeData)));
  }

  function tradePL(trades) {
    return trades.map((trade, index) => {
      if (trade.BTCamount > 0) {
        return { ...trade, PL: "-" };
      } else {
        let pl = trade.USDamount / Math.abs(trades[index - 1].USDamount);
        pl = (pl - 1) * 100;
        return { ...trade, PL: pl.toFixed(2) + "%" };
      }
    });
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
      <h2>
        Current balance:{" "}
        {(user.USDbalance + user.BTCbalance * price).toFixed(2)}$
      </h2>
      <p style={{ fontSize: "1.5rem" }}>
        {" "}
        Current price: <span style={{ color: priceColor }}>{`${price}$`}</span>
      </p>
      <Button
        style={{ margin: "1rem" }}
        variant="outline-success"
        onClick={() => tradeHandler("BUY")}
      >
        Buy BTC
      </Button>
      <Button
        style={{ margin: "auto" }}
        variant="outline-danger"
        onClick={() => tradeHandler("SELL")}
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
          {JSON.parse(trades)
            .reverse()
            .map((trade) => (
              <tr key={trade.id}>
                <td>{new Date(trade.executionTime).toUTCString()}</td>
                <td>{trade.USDamount > 0 ? "SELL" : "BUY"}</td>
                <td>{trade.PL}</td>
                <td>{trade.BTCamount.toFixed(5)}</td>
                <td>{trade.USDamount.toFixed(2)}</td>
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
