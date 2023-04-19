import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

/* NewExpense looking to render a form where users can enter/input their expense data */

/* on NewExpense we can accept the props argument as well */
const NewExpense = (props) => {
  /* simply need a true or false state which says whether the form should or not. Start with false.
  setIsEditing is the updating function. */
  const [isEditing, setIsEditing] = useState(false);

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
    /* in the saveExpenseData handler, which itself is called in the Expense Form, we can of course
      call props.onAddExpense. Forwarding enriched expenseData */
    props.onAddExpense(expenseData);
  };

  /* this function should be triggered when the button is clicked */
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {/* button is clicked -> setIsEditing is therefore set to true -> see the function above. */}
      {/* show the button if we are not editing. using the && trick - check if variable is false,
      in which case show a button. */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* Adding a new prop to expense form. Name totally up to me, I'm naming it on something 
      because I want to make it clear that the value for this prop should be a function. This is 
      a function which will eventually be triggered when something happens inside of this component. 
      In this case, when the user saves the entered expense data - (so, when the form is submitted) */}
      {/* onSaveExpenseData prop in this custom component recieves this saveExepenseData function as a
      value. We point at the function, don't execute saveExpenseDataHandler so its passed to the
      expense form */}
      {/* Check if editing is true -> if it is renderv the form */}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
