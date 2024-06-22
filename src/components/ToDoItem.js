import React from "react";
function TodoItem({ task, deleteTask, toggleTaskCompletion }) {
  return (
      <li>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
          </span>
          <button onClick={toggleTaskCompletion}>
              {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button className="delete" onClick={deleteTask}>Delete</button>
      </li>
  );
}

export default TodoItem;
