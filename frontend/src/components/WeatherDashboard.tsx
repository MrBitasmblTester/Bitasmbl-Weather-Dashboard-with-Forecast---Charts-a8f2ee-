import React from "react";

type Props = { city: string };

const WeatherDashboard: React.FC<Props> = ({ city }) => {
  // TODO: fetch from backend, show current + forecast
  return <div>Weather for {city}</div>;
};

export default WeatherDashboard;