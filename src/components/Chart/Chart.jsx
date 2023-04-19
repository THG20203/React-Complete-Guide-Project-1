import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

/* Create chart component function */
const Chart = (props) => {
  /* inside chart -> render chart bars */
  return (
    <div className="chart">
      {/* OVERALL PREMISE - output chart bars dynamically by going through array of data points and 
      mapping every data point to a chart bar */}
      {/* On props, could expect a data points prop, (that name is up to me, it is my component) and 
      I expect data points prop to hold a value which is an array, hence calling map() -> then map()
      every single data point into a Chart bar component. */}
      {/* Aim of function below -> create as many chart bar components as we have dataPoints */}
      {props.dataPoints.map((dataPoint) => (
        /* Pass data into thew chart bar to control how it will be rendered, which value will be 
        rendered there. */
        /* Now up to this point, we're never using the chart component, so we as the creator of this 
        component can define which kind of data we expect to extract in the future. */
        <ChartBar value={data.point.value} />
      ))}
    </div>
  );
};

export default Chart;
