/* make overall build process aware of css file, tell it css code should be considered */
import "./ExpenseItem.css";

/* JavasScript code */

/* Inside of ExpenseItem.jsx - we need to do something with the recieved attribute values */

/* How do we get access to the values defined in the place where we use our custom components? 
The answer is parameters */

// SUPER IMPORTANT PROPS EXPLANATION
/* We get one parameter - react ensures this. This is an object which holds all the recieved 
attributes as properties, hence the name props */

/* Props hold all the values we get for the attributes on our custom element We get key value
pairs in our props object. */

function ExpenseItem(props) {
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

  return (
    <div className="expense-item">
      {/*toISOString - return date as string value in ISO format */}
      <div>
        {/* Between curly braces in JSX code, point at 'month' helper variable or const as it is (ES6) */}

        <div>{month}</div>
        <div>Year</div>
        <div>Day</div>
      </div>
      <div className="expense-item__description">
        {/* Getting access to the title property, which will exist, because we
        set a title attribute. The key which I access on my props object has to 
        be the name I picked for my attribute. */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
