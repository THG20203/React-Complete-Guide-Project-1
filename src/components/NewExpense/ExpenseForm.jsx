import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState();
  const [enteredAmount, setEnteredAmount] = useState();
  const [enteredDate, setEnteredDate] = useState();
  /* best to add logic here and not within the JSX code like we have discussed before. To 
  make it clear this will be called on an event - end the const name with handler */

  /* function should be executed whenever the title input changes */
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    /* this function will execute everytime we type in the 'title' labeled field. We want to get the 
    value the user entered. Passing in the event object to the titleChangeHandler 
    function -> we get an event oject which describes the event which occured (default JavaScript behavior 
    you get in the browser when you listen to events)  */
    /* since we passed this function to react basically to the onChange prop below, react/ browser
    will make sure we get such an event object when this change event occurs */
    /* target is the field we're interested in -> points at the DOM element for which the event 
    occured. The input in turn has a long list of properties we can read
    and set -> the 'value' property (holds the current value of the input at the point this event
    occurs). This means we can drill into this target and then the value, to get the value which 
    was currently entered when the event occured for the element we're listening. */
    /* above we are passing event.target.value as an argument of setEnteredTitle. So now, this will 
    be stored in our state. */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    /* onSubmit - default browser behavior and unfortunately a part of this default browser behavior 
    is that is you do click the add expense button originally the page will reload. This is because the 
    browser automatically sends request (when a form is submitted) to the server hosting the web page. */

    /* we want to handle the submission with javascript, manually collect, combine data do something with
    it hence disabling default behavior. praventDefault method = built into javascript. Prvent the default 
    of this request being sent and since that request isn't being sent page will also not reload, because
    we stay on the currently loaded page without sending any request anywhere and we can continue handling
    this with javascript. */
    event.preventDefault();

    /* below we want to combine all our entered data */
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      /* set new date, constructing a new date with the built in date constructor, to which I then in turn
      pass the enteredDate, which will parse that date string, convert it into an object */
      date: new Date(enteredDate),
      /* these property names -> title, amount and date are up to me because its my object, but the 
      values -> enteredTitle etc points towwards the state variables above */
    };
  };

  return (
    /* its on the form where I want to react to onSubmit (because its the overall form element that will 
    emit an event), and then execute some function */
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* using onChange -> change on every keystroke rather than onClick -> advantage - can use same event 
          on all input types */}

          {/* we're changing the prop to onChange -> under the hood this will be an event listener for a change 
          event to the input element which is rendered in the DOM. Then we need to point (at the function) that 
          should be executed when that event occurs. */}

          {/* in the onChange prop below I'll pass a pointer 'titleChangeHandler' as a value */}

          {/* two way binding -> means for inputs we don't just listen to changes, we can also pass a new value 
          back into the input. We can therefore reset or change the input programmatically. All we have to
          do is add the value attribute to the input element. This will set the internal value property,
          which every input element has, and we can set it to a new value. */}
          <input type="text" value="" onChange={titleChangeHandler} />
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
