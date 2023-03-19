// Modify the TodoList by adding a "remove" button to each li tag.
// When clicked, the event handler should remove corresponding item from the items array.
import React, { useState } from "react";

function ToDoList(props) {
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
    lists.splice(i, 1);
    setLists([...lists]);
  };

  return (
    <>
      {props.render(
        inputVal,
        handleChange,
        addTask,
        resetForm,
        lists,
        removeList
      )}
    </>
  );
}

export default ToDoList;
