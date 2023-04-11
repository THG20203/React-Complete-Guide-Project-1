import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  /* best to add logic here and not within the JSX code like we have discussed before. To 
  make it clear this will be called on an event - end the const name with handler */

  /* function should be executed whenever the title input changes */
  const titleChangeHandler = (event) => {
    /* this function will execute everytime we type in the 'title' labeled field */

    /* we want to get the value the user entered. How do we get that value? Pass in the event object
    to the titleChangeHandler function. */

    /* we automatically get an event oject which describes the event which occured. Thats a default 
    JavaScript behavior you get in the browser when you listen to events.  */

    /* since we passed this function to react basically to the onChange prop below, react/ browser
    will make sure we get such an event object when this change event occurs */
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* using onChange -> change on every keystroke rather than onClick -> advantage - can use same event 
          on all input types */}

          {/* we're changing the prop to onChange -> under the hood this will be an event listener for a change 
          event to the input element which is rendered in the DOM. Then we need to point (at the function) that 
          should be executed when that event occurs. */}

          {/* in the onChange prop below I'll pass a pointer 'titleChangeHandler' as a value */}
          <input type="text" onChange={titleChangeHandler} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2024-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
