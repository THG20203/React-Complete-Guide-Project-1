/* First code file, will be executed when page is loaded */

/* index.jsx file WILL BE FIRST TO BE EXECUTED */

/* not exactly the index.jsx code, but a transformed version of code */

/* react-dom -> second part of the react library -> different responsibilities to 'react' */

/* reactDOM makes a feature exposed by the ReactDOM library available inside the index.jsx file */

import ReactDOM from "react-dom/client";

/* index.jsx -> watch our code -> deliver it to the browser, but before it delivers it
will transform it, so extra features work in browser even though they wouldn't work otherwise 
in regular js - i.e. import of css shown below */

import "./index.css";
import App from "./App";

/* importing ReactDOM to call the createRoot method on it */

/* createRoot creates the main entry point -> the main hook of the overall user interface I'm 
about to build with react. createRoot tells React when the react app, the UI should be placed in 
the web page loaded */

const root = ReactDOM.createRoot(document.getElementById("root"));

/* <App /> = not regular javascript syntax. Looks like HTML code -> works because
its transformed before it is delivered to the browser */

root.render(<App />);
