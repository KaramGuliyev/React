// Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable.
// The items state variable should be an array of strings. The TodoList component should also contain an input tag and a button.
// When the button is clicked, the event handler should add the value of the input tag to the items array.

import React, { useState } from "react";

function ToDoList() {
  const [lists, setLists] = useState([
    "RED",
    "MORE RED",
    "MORE MORE RED",
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    setInputVal(e.target.value)
  }

  const addTask = () => {
    setLists([...lists, inputVal]);
  };

  return (
    <>
      <input
        value={inputVal}
        onChange={handleChange}
      />
      <button onClick={addTask}>
        GUESS WHAT THIS BUTTON DOES
      </button>
      <ul>
        {lists.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
