// Import the react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// create a react component


const App = () => {
    const buttonText = {text: 'Click Me'};
    const labelName = 'Enter name:'
  return (
    <div>
      <label className="label" htmlFor="name">
        {" "}
        {labelName}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen

ReactDOM.render(
  <App />,
  document.querySelector("#root") // reference to html element
);
