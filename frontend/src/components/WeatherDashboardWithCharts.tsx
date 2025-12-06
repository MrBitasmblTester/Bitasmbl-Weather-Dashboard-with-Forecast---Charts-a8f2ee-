import React from "react";
import WeatherChart from "./WeatherChart";

const WeatherDashboardWithCharts: React.FC = () => {
  const sample = [{ time: "2025-01-01", temp: 20 }];
  return (
    <div>
      <h2>Trends</h2>
      <WeatherChart points={sample} />
    </div>
  );
};

export default WeatherDashboardWithCharts;