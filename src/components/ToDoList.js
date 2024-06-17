import React from "react";
import ToDoApp from "./ToDoApp.js";
import ToDoItem from "./ToDoItem.js";

function ToDoList({ tasks, deleteTask, toggleTaskCompletion }) {
  if (!tasks || !Array.isArray(tasks)) {
    return <div>No tasks available</div>;
}
  
  return (
    <ul>
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          task={task}
          deleteTask={() => deleteTask(task)}
          toggleTaskCompletion={() => toggleTaskCompletion(task)}
        />
      ))}
    </ul>
  );
}
export default ToDoList;
