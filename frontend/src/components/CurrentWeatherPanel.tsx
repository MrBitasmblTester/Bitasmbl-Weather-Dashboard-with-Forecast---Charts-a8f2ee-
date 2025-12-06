import React from "react";

type Props = { data: any };

const CurrentWeatherPanel: React.FC<Props> = ({ data }) => {
  if (!data) return null;
  return (
    <section>
      <h2>Current</h2>
      <div>Temp: {data.temperature}</div>
      <div>Humidity: {data.humidity}</div>
    </section>
  );
};

export default CurrentWeatherPanel;