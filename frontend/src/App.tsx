import React, { useState } from "react";
import WeatherDashboard from "./components/WeatherDashboard";

const App: React.FC = () => {
  const [city, setCity] = useState("Berlin");
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <input value={city} onChange={e => setCity(e.target.value)} />
      <WeatherDashboard city={city} />
    </div>
  );
};

export default App;