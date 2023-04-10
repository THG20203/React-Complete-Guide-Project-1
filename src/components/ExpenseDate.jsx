/* import css file for ExpenseItem.css -> make entire project aware of that css file */
import "./ExpenseDate.css";

/* Splitting components -> props need to be accepted here, such that a date prop is set */
function ExpenseDate(props) {
  /* Output value dynamically and acces props.date. How can we output the month? We can use a built
  in method - accessible on all date objects in JavaScript - toLocaleString. This toLocaleString 
  method helps output dates in human readable formats. */

  /* Passing in two arguments to toLocaleString, first is the language, second is an object where
  you configure how specifically that they should be formatted */

  /* better to NOT add normal JavaScript into JSX code, but to create a seperate helper variable. 
  Something like month, which is a seperate helper const that simply holds that value. */

  /* Why put logic up here? Keep JSX code lean, more complex logic is rest of function. JSX = easier 
  to read */

  const month = props.date.toLocaleString("en-GB", { month: "long" });
  /* same as above for day but we want it in a 2-digit format */
  const day = props.date.toLocaleString("en-GB", { day: "2-digit" });
  /* for year - access getFullYear -> which is another built-in which just extracts
  the year as a four digit number */
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
