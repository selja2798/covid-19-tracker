import React, { useState, useEffect } from "react";
import styles from "./chart.module.css";
import { fetchDailyData } from "../../api";
import LineChart from "../Line-chart/line-chart";
import BarChart from "../bar-chart/bar-chart";

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const dailyData = await fetchDailyData();

      setDailyData(dailyData);
    };

    fetchAPI();
  }, []);

  console.log(data);

  return (
    <div className={styles.container}>
      {country ? (
        <BarChart data={data} country={country} />
      ) : (
        <LineChart dailyData={dailyData} />
      )}
    </div>
  );
};

export default Chart;
