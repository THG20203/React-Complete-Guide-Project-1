import React from "react";

import "./ChartBar.css";

/* define our component function ChartBar and set this equal to props, then return JSX code. We will need
props because we are defining them in the Chart.jsx component. */
const ChartBar = (props) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner"></div>
    </div>
  );
};

export default ChartBar;
