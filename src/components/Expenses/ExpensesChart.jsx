import React from "react";
import Chart from "../Chart/Chart";

/* now want to have a look at our filtered expenses, make sure we go through all the expenses 
for a selected year and that we then sum up the expenses for all the different months, and we 
assign them here to our data points. Expect to get the filtered expenses as a prop on my expenses chart component, because we will
use expenses chart in the expenses JS file later */

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

  /* Here in ExpensesChart -> just expect to get list of expenses, Going to have a for loop to loop
  through all our expenses */
  for (const expense in props.expenses) {
    /* then we want to have a look at every expense, get the month of every expense and update the 
    value of the appropriate data point by the expense amount */
    /* date is a date object and there we have the built in get month method - starting at 0 though
    so January is 0 */
    const expenseMonth = expense.date.getMonth();
    /* We can month to pick right data point, since January has the index zero in this array as well. */

    /* So, we use the month as an index in that array. Reach out to chart data points, for given month 
    starting at 0 and ending at 11 and updating the value of selected data point by adding something 
    to it with += -> adding expense amount. */

    /* we are increasing the value of a given month by that expense amount. We go through through all
    expenses to sum up all the expenses for this different months, and assign the values to the 
    appropriate months. */
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
