import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

/* want new component - responsible for rendering the four Expense items, so that these four items
are no longer rendered in the App component. I have instead created a new component to do that instead. */

/* Its the expenses component (our new component) which should be rendered in App.js */

/* Why are we doing this? Make our JSX code a bit leaner by extracting some JSX code into seperate 
component */

const Expenses = (props) => {
  return (
    <div className="expenses">
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
    </div>
  );
};

export default Expenses;
