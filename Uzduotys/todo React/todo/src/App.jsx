import './App.css';
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskCounter from './components/TaskCounter';
import TaskCard from './components/TaskCard';
import AddTaskCard from './components/AddTaskCard';

function App() {
    const [tasks, setTasks] = useState([]);
    

    const addTask = (task) => {
        setTasks([...tasks, task]);
    }

    const newTaskCard = (newTaskCard) => {
        setTasks([...tasks, newTaskCard]);

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
        <>
        <div className='formWrapper'>
            <TaskCounter tasks={tasks} />
            <TaskList tasks={tasks} deleteTask={deleteTask} markAsComplete={markAsComplete} />
            <AddTask addTask={addTask} />
        </div>
        <h1 className='MoretaskInfo'>Add More Info about Task </h1>
        <div className='FormTaskWrapper'>   
            <AddTaskCard newTaskCard={newTaskCard} />  
        </div>
        <div className='CardTaskWrapper'>
            {tasks.map(task => <TaskCard key={task.id} task={task} deleteTask={deleteTask} markAsComplete={markAsComplete} />)}
        </div>
        </>
    );
}

export default App;
