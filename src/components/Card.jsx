/* Web Development - when you hear the term Card it typically means some kind of container look,
with rounded corners etc */

/* Make our card component do one main thing -> return <div> or any other kind of container HTML 
element with a className of Card */

/* Then we could add a Card.css file and import that into that Card component */
import "./Card.css";

/* Card container - act as a shell around either our ExpensesItem container or our Expenses content */

/* accepting props, then children -> children is a reserved name. We don't set children prop on this card.
We are setting a className called prop and at the moment this won't do anything. */

/* But, I'm NOT setting a children prop. Children is a reserved name. The value of this special children 
prop will always be the content between the opening and closing tags of my custom component. */

/* Need to tweak Card component - so as whatever is set as a className on 'Card' to this className string
we're setting as a class name on that div */

/* Now making sure any values set on the class named prop is added to this long string of class names which 
is then finally set on the div inside of the card */

function Card(props) {
  /* So now, anything we recieve as a className from outside is added to that string */
  const classes = "card" + props.className;
  /* In the div we are returning, we can dynamically point at the classes constant */
  return <div className={classes}>{props.children}</div>;
}

export default Card;
