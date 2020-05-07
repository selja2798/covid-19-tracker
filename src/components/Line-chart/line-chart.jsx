import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ dailyData }) =>
  dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        //2 object is infected and deaths
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Infected",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

export default LineChart;
