/* we are looking for an expenseitem file in a components folder which sits next to App.js file
in which we have this imports statement */

import ExpenseItem from "./components/ExpenseItem";

/* React code is JS code - App.jsx is a fairly trivial file */

/* Holds a function called App and then we export this function */

/* App.jsx function is returning HTML code inside of a JS file, why? 
its JSX - works in JS files because of overall project setup ->
transformation steps running behind the scenes */

function App() {
  return (
    <div>
      {/* Uppercase character - custom components must start with uppercase character */}
      <ExpenseItem />
    </div>
  );
}

export default App;
