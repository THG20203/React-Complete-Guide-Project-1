/* Web Development - when you hear the term Card it typically means some kind of container look,
with rounded corners etc */

/* Make our card component do one main thing -> return <div> or any other kind of container HTML 
element with a className of Card */

/* Then we could add a Card.css file and import that into that Card component */
import "./Card.css";

/* Card container - act as a shell around either our ExpensesItem container or our Expenses content */

function Card() {
  return <div className="card"></div>;
}

export default Card;
