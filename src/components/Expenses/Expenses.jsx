/* React is the default import, we need specifically named things from the react library -
i.e. a function called useState */

///// IMPORTANT USESTATE DEFINITION
/* useState = function provided by the React library, allows us to define values as state
where changes to these values should reflect in the component function being called again */

// USE STATE SPECIFIC THEORY
/* useState is a hook to utilise for REACT only -> registers some state (some value as a state) 
for the component in which it is being called. Go even more precise -> it registers it for 
a specific component instance */

/* useState wants a default/initial state value (props.title) because we create a special 
variable, where changes will need this function to be called again */

/* useState returns an array, first value is the variable itself, second is the updated
function */

/* array destructing utilised, to store both elements in seperate variables or consts */

/* convention is call the first variable whatever you want, second set then the name 
  of the first variable  */
import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
/* Go up one level in folder with .. and then into UI folder */
import Card from "../UI/Card";

/* want new component - responsible for rendering the four Expense items, so that these four items
  are no longer rendered in the App component. I have instead created a new component to do that instead. */

/* Its the expenses component (our new component) which should be rendered in App.js */

/* Why are we doing this? Make our JSX code a bit leaner by extracting some JSX code into seperate 
  component */

const Expenses = (props) => {
  /* First of all we have to set up a state with useState() - then initialise the state with a value of
    2020. Then have filteredYear and setFilteredYear. */
  const [filteredYear, setFilteredYear] = useState("2020");

  /* In Expenses JS -> define the function I want to pass DOWN -> filterChangeHandler. Expect to get the 
    selectedYear as an argument. */
  const filterChangeHandler = (selectedYear) => {
    /* Whenever this filter change handler function executes, we can now setFilteredYear to selectedYear,
      which we recieve as a parameter above */
    setFilteredYear(selectedYear);
  };

  /* props.expenses = all expenses, with the filtered method called on them. Another built in method, simply 
    filters an array. You pass a function to it -> if this function returns true a certain item is kept, if it
    returns false its not kept. */
  /* Filter returns a brand new array. It does not add it to the original array, instead a new array is 
    returned, in that new array, we either keep or remove items. BUT original array is not touched. */
  const filteredExpenses = props.expenses.filter((expense) => {
    /* need to get full year and convert to a string to compare to a filtered year like the 2020 above */
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/* retain convention onChangeFilter, then point at filterChangeHandler function */}
        {/* passing filteredYear (selected state) as a value for this 'selected' prop to Expenses filter,
          and inside of ExpensesFilter, we can then use this selected prop to set value for dropdown. */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* Conditional content - if the filteredExpenses length for that year are 0, simple message
        no expenses are found. Default JavaScript ternary expression syntax. Condition, question mark, then
        what we want to do if the condition is met, colon for the else case, what we want to do if its not
        met. */}
        {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default Expenses;

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
