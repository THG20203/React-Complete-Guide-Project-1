import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

/* Create chart component function */
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  /* map method -> now we won't map the data points into JSX elements, but instead simply transform
  them from objects to numbers */
  /* we transfrom a data point object to just the number, the number stored in data point value. */
  /* Therefore map here on data points will return a brand new array, which is just an array of 
  numbers. So in our case for 12 months, we'll have an array of 12 values. */
  const totalMaximum = Math.max();
  /* We're calculating the total max value. Look at all the months, find the biggest value across 
  all months. This is the maximum value that should be represented in the chart */

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
        /* //VALUE PROP -> when define the data points later, every data point has a value property */
        /* //MAX VALUE PROP -> Also want to make sure every bar chart plots the value, in relation to 
        the maximum value in the entire chart. Hence max value prop. That is currently null -> thats
        not data which we extract from the data point, because that is a unique value which is the same 
        for all chart bars in a given chart. We'll need to derive maxValue */
        /* want to have a label in this case for months -> January, February, March */
        /* //KEY PROP -> since we're outputting a list, we should also add a key. Special key prop helps
        react render these list items efficiently. dataPoint has unique id, or maybe we use the label, so
        we say the label should be unique -> every chart bar has its own unique label, so can use as a 
        unique identifier for this special key prop here. */
        <ChartBar
          key={dataPoint.label}
          value={data.point.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
