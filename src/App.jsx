import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";

/* no longer need an import from ExpenseItem.jsx -> now simply just from Expenses */
/* Into components then Expenses folder then get Expenses jsx file */
import Expenses from "./components/Expenses/Expenses";

/* React code is JS code - App.jsx is a fairly trivial file */

/* Holds a function called App and then we export this function */

/* App.jsx function is returning HTML code inside of a JS file, why? 
its JSX - works in JS files because of overall project setup ->
transformation steps running behind the scenes */

const App = () => {
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

  /* define a function before we return JSX code. We expect to get our expense as a parameter,
  then we do something with it */
  const addExpenseHandler = (expense) => {};

  return (
    <div>
      {/* We can pass a pointer at newExpense, so that inside of newExpense, we can call this 
      function and pass that expense data up to the app component. */}
      {/* pass a pointer of addExpenseHandler to the onAddExpense prop, on NewExpense */}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* We are using props to get expenses into this new 'to be created' component. */}
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
