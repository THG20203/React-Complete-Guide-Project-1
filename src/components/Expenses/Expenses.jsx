import React from "react";
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
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter />
        {/* Uppercase character - custom components must start with uppercase character */}

        {/* Passing data of 4 expense objects above into the expense items, so need to make expense items
      configurable from outside. Data should not be stored inside, but received from outside */}

        {/* In App.js - can simply add attrbitues to these custom HTML elements (components) */}

        {/* Dynamically retrieve the title stored in this first ExpesneItem, (can use curly braces to assign
        values to attributes) */}

        {/* Access expenses array, within here first item with index 0, then in there the object -> with a 
      title property. */}

        {/* note the attribute names are up to me. Just note the part after the dot matches the property names,
      because we are accessing these objects */}
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
        {/* ExpenseItem is being used four times. In Expenses js, we have four ExpenseItems.
      Now every item recieves its own seperate State, which is detached from the other states */}

        {/* Everytime it is called, a new seperate state is created. (of course, this is in the 
        same way, but its managed independently by React) */}

        {/* so if we change the title with a button onClick in the first ExpenseItem, the other ones 
      are not effected cause they have their own state. Its on a per component instance basis */}
      </Card>
    </div>
  );
};

export default Expenses;
