import React from 'react';

function ToDoList({ tasks, deleteTask, toggleTaskCompletion }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.text}
                    </span>
                    <div>
                        <button
                            onClick={() => toggleTaskCompletion(task)}
                            style={{
                                marginLeft: '10px',
                                backgroundColor: task.completed ? 'green' : 'gray',
                                color: '#fff',
                                border: 'none',
                                padding: '5px 10px',
                                cursor: 'pointer',
                                textDecoration: 'none'  // Ensure button text is not crossed out
                            }}
                        >
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button
                            onClick={() => deleteTask(task)}
                            style={{
                                marginLeft: '10px',
                                backgroundColor: 'red',
                                color: '#fff',
                                border: 'none',
                                padding: '5px 10px',
                                cursor: 'pointer',
                                textDecoration: 'none'  // Ensure button text is not crossed out
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;


