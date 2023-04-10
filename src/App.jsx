/* we are looking for an expenseitem file in a components folder which sits next to App.js file
in which we have this imports statement */

import ExpenseItem from "./components/ExpenseItem";

/* React code is JS code - App.jsx is a fairly trivial file */

/* Holds a function called App and then we export this function */

/* App.jsx function is returning HTML code inside of a JS file, why? 
its JSX - works in JS files because of overall project setup ->
transformation steps running behind the scenes */

function App() {
  /* four objects inside of expenses array */
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
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
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
