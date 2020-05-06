import React, { useState, useEffect } from "react";
import styles from "./chart.module.css";
import { fetchDailyData } from "../../api";
import LineChart from "../Line-chart/line-chart";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const dailyData = await fetchDailyData();

      setDailyData(dailyData);
    };

    fetchAPI();
  }, []);

  return (
    <div className={styles.container}>
      <LineChart dailyData={dailyData} />
    </div>
  );
};

export default Chart;
