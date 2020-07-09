import React, { useEffect } from "react";
import { createChart } from "lightweight-charts";

export default () => {
  useEffect(loadChart, []);
  return (
    <>
      <div
        style={{ width: 600, margin: "auto", padding: "2rem" }}
        id="tradingview-chart"
      ></div>
    </>
  );
};

const loadChart = () => {
  const chart = createChart("tradingview-chart", {
    width: 600,
    height: 300,
    layout: {
      backgroundColor: "#000000",
      textColor: "#d1d4dc",
    },
    grid: {
      vertLines: {
        visible: false,
      },
      horzLines: {
        color: "rgba(42, 46, 57, 0.5)",
      },
    },
    priceScale: {
      borderVisible: false,
    },
    timeScale: {
      borderVisible: false,
    },
    crosshair: {
      horzLine: {
        visible: false,
      },
    },
  });
  const lineSeries = chart.addLineSeries();
  lineSeries.setData([
    { time: "2019-04-11", value: 80.01 },
    { time: "2019-04-12", value: 96.63 },
    { time: "2019-04-13", value: 76.64 },
    { time: "2019-04-14", value: 81.89 },
    { time: "2019-04-15", value: 74.43 },
    { time: "2019-04-16", value: 80.01 },
    { time: "2019-04-17", value: 96.63 },
    { time: "2019-04-18", value: 76.64 },
    { time: "2019-04-19", value: 81.89 },
    { time: "2019-04-20", value: 74.43 },
  ]);
};
