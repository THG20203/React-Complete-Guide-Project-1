import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";

/* no longer need an import from ExpenseItem.jsx -> now simply just from Expenses */
/* Into components then Expenses folder then get Expenses jsx file */
import Expenses from "./components/Expenses/Expenses";

/* React code is JS code - App.jsx is a fairly trivial file. Holds a function called App and then we 
export this function. App.jsx function is returning HTML code inside of a JS file, why? its JSX - 
works in JS files because of overall project setup -> transformation steps running behind the scenes */

/* DUMMY EXPENSES - initially four objects inside of expenses array */
const DUMMY_EXPENSES = [
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

const App = () => {
  /* define a function before we return JSX code. We expect to get our expense as a parameter,
  then we do something with it */
  /////////

  /* In useState pass dummy expenses -> (this array of dummy data) as an initial state value, so that 
  we have some inital expenses to display, but then use destructuring to get access to expenses and to  
  the set Expenses state updating function. */
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  /* FUNCTION BELOW So how could we now update this expenses array everytime a new expense is added? We have 
  this addExpenseHandler function, which we added in the last course section -> This = triggered
  whenever a new expense is added. We even receive the expense as a parameter. */
  /* Just because you change a variable doesn't mean anything, because React won't update the component. 
  Need to useState */
  const addExpenseHandler = (expense) => {
    /* can now call setExpenses to set our expenses array to a new array which includes this new expense */
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

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
