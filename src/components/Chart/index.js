import React, { useEffect } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import { apiUrl } from "../../config/constants";
import axios from "axios";

export default () => {
  useEffect(loadChart, []);

  return (
    <>
      <div
        style={{
          width: 1000,
          margin: "auto",
          padding: "2rem",
          position: "relative",
          right: "2.5rem",
        }}
        id="tradingview-chart"
      ></div>
    </>
  );
};

const loadChart = async () => {
  const response = await axios.get(`${apiUrl}/data`);
  const chart = createChart("tradingview-chart", {
    width: 1000,
    height: 500,
    layout: {
      backgroundColor: "#000000",
      textColor: "rgba(255, 255, 255, 0.9)",
    },
    grid: {
      vertLines: {
        color: "rgba(197, 203, 206, 0.5)",
      },
      horzLines: {
        color: "rgba(197, 203, 206, 0.5)",
      },
    },
    crosshair: {
      mode: CrosshairMode.Normal,
    },
    priceScale: {
      borderColor: "rgba(197, 203, 206, 0.8)",
    },
    timeScale: {
      autoScale: true,
      borderColor: "rgba(197, 203, 206, 0.8)",
    },
  });

  chart.applyOptions({
    timeScale: {
      // rightOffset: 12,
      barSpacing: 1,
      // fixLeftEdge: true,
      // lockVisibleTimeRangeOnResize: true,
      // rightBarStaysOnScroll: true,
      // borderVisible: false,
      // borderColor: "#fff000",
      // visible: true,
      // timeVisible: true,
      // secondsVisible: false,
      tickMarkFormatter: (time, tickMarkType, locale) => {
        const date = new Date(time * 1000);
        return `${date
          .toDateString()
          .split(/\s/)
          .slice(1, 3)} ${date
          .getHours()
          .toString()
          .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
      },
    },
    localization: {
      timeFormatter: (timestamp) => {
        const date = new Date(timestamp * 1000);
        return `${date
          .getHours()
          .toString()
          .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
      },
    },
  });

  var candleSeries = chart.addCandlestickSeries({
    upColor: "#36d160",
    downColor: "#de2f2f",
    borderDownColor: "#000",
    borderUpColor: "#000",
    wickDownColor: "#de2f2f",
    wickUpColor: "#36d160",
  });

  const data = response.data;
  candleSeries.setData(data);
  // chart.timeScale().scrollPosition(2, true);
  chart.timeScale().setVisibleLogicalRange({
    from: data.length - 20,
    to: data.length - 1,
  });

  setInterval(refreshChartData, 8000, chart, candleSeries);
};

const refreshChartData = async (chart, candleSeries) => {
  const response = await axios.get(`${apiUrl}/data`);
  const data = response.data;

  candleSeries.setData(data);
  chart.timeScale().setVisibleLogicalRange({
    from: data.length - 20,
    to: data.length - 1,
  });
};
