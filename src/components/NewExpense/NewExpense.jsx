import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

/* NewExpense looking to render a form where users can enter/input their expense data */
const NewExpense = () => {
  //SAVE EXPENSE DATA FUNCTION
  /* important as a parameter in the function below I will expect the entered expense data. I'm making
  it clear this function expects to get this parameter. */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    /* expense data = another object */
    const expenseData = {
      /* we are copying in the expense data, which I expect to be that object we generate here in the 
      submit handler (in expense form with the key value pairs with title, amount and date). We are
      pulling out all the key value pairs, adding them to a new object */
      ...enteredExpenseData,
      /* add a unique ID */
      id: Math.random().toString(),
    };
  };

  return (
    <div className="new-expense">
      {/* Adding a new prop to expense form. Name totally up to me, I'm naming it on something 
      because I want to make it clear that the value for this prop should be a function. This is 
      a function which will eventually be triggered when something happens inside of this component. 
      In this case, when the user saves the entered expense data - (so, when the form is submitted) */}

      {/* onSaveExpenseData prop in this custom component recieves this saveExepenseData function as a
      value. We point at the function, don't execute saveExpenseDataHandler so its passed to the
      expense form */}
      <ExpenseForm onSaveExprenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
