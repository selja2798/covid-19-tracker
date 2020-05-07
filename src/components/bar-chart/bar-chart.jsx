import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data: { confirmed, recovered, deaths }, country }) =>
  confirmed ? (
    <Bar
      data={{
        labels: ["Positif", "Sembuh", "Meninggal"],
        datasets: [
          {
            label: "",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: false,
        title: { display: true, text: `Data saat ini di negara ${country}` },
      }}
    />
  ) : null;

export default BarChart;
