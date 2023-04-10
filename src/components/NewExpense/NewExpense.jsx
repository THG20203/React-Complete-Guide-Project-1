import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

/* NewExpense looking to render a form where users can enter/input their expense data */
const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
