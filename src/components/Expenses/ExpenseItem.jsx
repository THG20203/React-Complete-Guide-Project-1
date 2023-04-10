import React from "react";
/* need to import ExpenseDate - our second custom component cause we're splitting components */
import ExpenseDate from "./ExpenseDate";

/* need pre defined styles from our Card component */
/* Go up one level in folder with .. and then into UI folder */
import Card from "../UI/Card";

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

/* We've replaced our <div> with our custom card component (see the Card element we are returning 
  with the class of expense-item */

const ExpenseItem = (props) => {
  /* move the logic out of the JSX code which we are attempting to keep as lean as possible, 
  don't want logic within it */
  const clickHandler = () => {
    console.log("Clicked");
  };
  return (
    <Card className="expense-item">
      {/* In ExpenseItem -> referencing the split component ExpenseDate we should set the date 
      prop */}

      {/* now we are funnelling data through multiple levels of components */}

      {/* We are forwarding our data (with the help of props) through multiple components */}

      {/* This content- between the opneing ExpenseDate tag and the closing tag for the <div>
      with the class expense-item__description is what will be available on props children */}

      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* Getting access to the title property, which will exist, because we
        set a title attribute. The key which I access on my props object has to 
        be the name I picked for my attribute. */}

        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* Below note we are just pointing to the clickHandler function */}

      {/* I am repeating just the name, no parentheses etc because of JSX */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
