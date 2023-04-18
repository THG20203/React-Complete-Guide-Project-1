import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

//MAP FUNCTION NOTES (filteredExpenses.map)

/* We want to render one expense item per element in the array. First of all need single curly 
braces (opening and closing) because we want to execute a dynamic expression in our JSX code. 
Expression I want to execute = reach out to my array of data (in this case the array of expenses),
and then for every element we want to create such a JSX element. */
/* For this, access props items (thats our array of expenses, then use built in array method (to 
JavaScript) the map method (this creates a new array, based on another array and that basically
transforms every element in that original array. */
/* More map explanation -> map takes a function which we pass as an argument in () parentheses, 
and that function is then executed for every item in the array on which we're calling map. */
/* The result of this function is tyhe element that will be added to the newly created array. */
/* function body -> return the JSX element in which we want to map this expense. In this case
I want to map every expense in my expenses array (shown in parentheses) into my JSX element */
/* In other words -> I want to transform the expense object to this JSX element. Want to transform
the expense object to this special kind of object. to this JSX element.
This expense -> (which is passed as parameter into this function automatically), that expense 
is used to extract the title */
/* need to add in filteredExpenses as the function to map over for filter above in logic to work */

//KEY PROP NOTES:
/* We have a way of telling react where a new item should be added.  Add a special prop to 
this item -> key prop. key prop -> can add to any component no matter matter if its a custom 
component by you or if its a built in HTML element. With key can help react identify individual
items. */
/* We need a unique value per list item. This will be the expense id, because in our expenses 
array every item has a unique id. */
