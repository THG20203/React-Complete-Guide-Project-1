import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

/* NewExpense looking to render a form where users can enter/input their expense data */
const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExprenseData />
      {/* Adding a new prop to expense form. Name totally up to me, I'm naming it on something 
      because I want to make it clear that the value for this prop should be a function. This is 
      a function which will eventually be triggered when something happens inside of this component. 
      In this case, when the user saves the entered expense data - (so, when the form is submitted) */}
    </div>
  );
};

export default NewExpense;
