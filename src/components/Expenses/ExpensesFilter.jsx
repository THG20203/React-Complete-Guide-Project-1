import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = () => {
  /* just as for the inputs, we will get an event object, can retrieve the chosen values from that */
  const dropdownChangeHandler = (event) => {};

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* select element will emit changes hence onChange built in prop added, onChange supported
        in similar fashion to how input elements were supported before. */}

        {/* pointer passed at this function to onChange -> to make sure its the dropdownChangeHandler
        function which is triggered whenever a value is chosen. */}
        <select onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
