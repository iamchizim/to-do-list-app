import React, { useState } from "react";
import ToDoApp from "./ToDoApp.js";

function ToDoForm({addTask}) {
  const [inputValue, setInputValue] = useState("");
  function handleChange(event) {
    setInputValue(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      addTask({ text: inputValue, completed: false });
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
export default ToDoForm;
