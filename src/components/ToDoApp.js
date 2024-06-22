import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';


const getStoredTasks = () => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
};

function ToDoApp() {
    const [tasks, setTasks] = useState(getStoredTasks);

  
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (taskToDelete) => {
        setTasks(tasks.filter(task => task !== taskToDelete));
    };

    const toggleTaskCompletion = (taskToToggle) => {
        setTasks(tasks.map(task =>
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


