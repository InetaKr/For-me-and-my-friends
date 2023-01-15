
import './App.css';
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskCounter from './components/TaskCounter';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const markAsComplete = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.completed = true;
            }
            return task;
        }));
    }

    return (
        <div>
            <TaskCounter tasks={tasks} />
            <TaskList tasks={tasks} deleteTask={deleteTask} markAsComplete={markAsComplete} />
            <AddTask addTask={addTask} />
        </div>
    );
}

export default App;
