import React from "react";
import Chart from "../Chart/Chart";

ExpensesChart = (props) => {
  const chartDataPoints = [
    /* all these data points initally have a value of 0 */
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  return <Chart />;
};

export default ExpensesChart;

/* now want to have a look at our filtered expenses, make sure we go through all the expenses 
for a selected year and that we then sum up the expenses for all the different months, and we 
assign them here to our data points. */

/* Expect to get the filtered expenses as a prop on my expenses chart component, because we will
use expenses chart in the expenses JS file later. */
