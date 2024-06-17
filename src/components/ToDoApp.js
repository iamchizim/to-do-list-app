import React, { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import TodoItem from "./ToDoItem";

function ToDoApp() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(prevTasks => prevTasks.filter(task => task !== taskToDelete));
}

const toggleTaskCompletion = (taskToToggle) => {
  setTasks(prevTasks => prevTasks.map(task =>
      task === taskToToggle ? { ...task, completed: !task.completed } : task
  ));
};
  return (
    <div>
      <h2>TO-DO LIST APP</h2>
      <ToDoForm addTask={addTask} />
      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
}

export default ToDoApp;
