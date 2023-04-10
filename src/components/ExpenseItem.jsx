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
  /* since we start at 0 with months - April has the number 3 */
  const expenseDate = new Date(2023, 3, 10);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      {/*toISOString - return date as string value in ISO format */}
      <h2>{expenseDate.toISOString()}</h2>
      <div className="expense-item__description">
        {/* Getting access to the title property, which will exist, because we
        set a title attribute. The key which I access on my props object has to 
        be the name I picked for my attribute. */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
