import React from "react";

type Props = { days: any[] };

const ForecastList: React.FC<Props> = ({ days }) => (
  <section>
    <h2>Forecast</h2>
    <ul>
      {days.map((d, i) => (
        <li key={i}>{d.date}: {d.tempMax} / {d.tempMin}</li>
      ))}
    </ul>
  </section>
);

export default ForecastList;