import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  /* best to add logic here and not within the JSX code like we have discussed before. To 
  make it clear this will be called on an event - end the const name with handler */
  const [enteredTitle, setEnteredTitle] = useState("");
  /* we are adding useState at the beginning of the ExpenseForm function and setting the state
  for the title input so to say */

  /* initially useState('') is an empty string - for the first time nothing was entered */

  /* but then -> we can use destructuring to get two elements - enteredTitle -> then following the
  convention, the second should be setEnteredTitle */

  /* calling useState more than once -> can have multiple states, multiple states slices or state 
  pieces per component */

  /* all of these states inside of one of the same components will be totally seperated from each 
  other. */
  const [enteredAmount, setEnteredAmount] = useState("");
  /* if you read the value of an imput element, it'll always be a string even if it stores a number,
  it'll be a number as a string. Same for date. */
  const [enteredDate, setEnteredDate] = useState("");

  ///////

  /* function should be executed whenever the title input changes */
  const titleChangeHandler = (event) => {
    /* this function will execute everytime we type in the 'title' labeled field */

    /* we want to get the value the user entered. How do we get that value? Pass in the event object
    to the titleChangeHandler function. */

    /* we automatically get an event oject which describes the event which occured. Thats a default 
    JavaScript behavior you get in the browser when you listen to events.  */

    /* since we passed this function to react basically to the onChange prop below, react/ browser
    will make sure we get such an event object when this change event occurs */

    /* target is the field we're interested in -> it points at the DOM element for which the event 
    occured -> in which cause the input. And the input in turn has a long list of properties we can read
    and set -> namely the 'value' property (holds the current value of the input at the point this event
    occurs). */
    /* This is super useful -> means we can drill into this target and then the value, to get the value
    which was currently entered when the event occured for the element we're listening. */
    setEnteredTitle(event.target.value);
    /* above we are passing event.target.value as an argument of setEnteredTitle. So now, this will 
    be stored in our state. */
  };

  //////
  /* How can we manage more than one state? */
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
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
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
