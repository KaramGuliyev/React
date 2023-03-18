// Modify the TodoList component so that the input clears every time a Todo is added to the items array.

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
    setInputVal("")
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
