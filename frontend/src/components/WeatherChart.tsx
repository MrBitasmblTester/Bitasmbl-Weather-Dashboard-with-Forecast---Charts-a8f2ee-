import React from "react";

type Point = { time: string; temp: number; humidity?: number };

type Props = { points: Point[] };

const WeatherChart: React.FC<Props> = ({ points }) => {
  // TODO: integrate real chart lib or custom SVG
  return <div>Chart with {points.length} points</div>;
};

export default WeatherChart;