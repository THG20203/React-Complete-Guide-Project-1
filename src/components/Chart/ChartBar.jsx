import React from "react";

import "./ChartBar.css";

/* define our component function ChartBar and set this equal to props, then return JSX code. We will need
props because we are defining them in the Chart.jsx component. */
const ChartBar = (props) => {
  /* calculate by how much this specific chart instance should be filled - could have variable we name 
  bar Fill height -> initially 0% - as a text, cause this will be assigned as a css style  */
  let barFillHeight = "0%";

  /* then check if have max value greater than 0%, so for the given data points, we do have a max value 
  greater than 0. Could have 0 later -> if filter for month with no expenses. */
  if (props.max > 0) {
    /* props.Value / props.maxValue * 100 -> give us percentage between 0 and 100 which this bar should be
    filled. (with math.round -> rounding to the nearest integar. Also want to convert to a string hence the
    + "%" at the end */
    barFillHeight = Mathround((props.vlaue / props.maxValue) * 100) + "%";
    /* now we want to set this as the height as the CSS height for this div */
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      {/* dynamically output props.label so that the label is visible. */}
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;

// GENERAL NOTES
/* Chart bar fill div = required to remember by how much this chart bar will be filled. */
/* one piece of information missing in this css class = height of this filled bar chart. 
Overall chart bar has a pre defined height (10rem), BUT how much we fill bar depends on the
data we're recieving. i.e. depends on value prop from Chart.jsx. want to fill chart bar by putting 
the value in relation to the max value. */
/* If max value fro the entire chart is 100 and the value for a given chart bar is 50, we fill 
that chart bar by 50%. So in chart bar component */

/* We need to calculate by how much specific chart bar instance should be filled. */
