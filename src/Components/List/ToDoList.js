// Modify the TodoList by adding a "remove" button to each li tag.
// When clicked, the event handler should remove corresponding item from the items array.
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

  const removeList = (i) => {
    lists.splice(i, i);
    setLists([...lists]);
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
          <div key={i}>
            <li>{e}</li>
            <button
              onClick={() => removeList(i)}
            >
              Remove
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
