/* make overall build process aware of css file, tell it css code should be considered */
import "./ExpenseItem.css";

/* JavasScript code */

function ExpenseItem() {
  /* since we start at 0 with months - April has the number 3 */
  const expenseDate = new Date(2023, 3, 10);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      {/*toISOString - return date as string value in ISO format */}
      <h2>{expenseDate.toISOString()}</h2>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
