// Modify the TodoList by adding a "reset" button that clears the items array when clicked.

import React, { useState } from "react";

function ToDoList() {
  const [lists, setLists] = useState([
    "RED",
    "MORE RED",
    "MORE MORE RED",
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const addTask = () => {
    setLists([...lists, inputVal]);
    setInputVal("");
  };

  const resetForm = () => {
    setInputVal("");
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
      <button onClick={resetForm}>Reset</button>
      <ul>
        {lists.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
