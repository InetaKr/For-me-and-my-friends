import './App.css';
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskCounter from './components/TaskCounter';
import TaskCard from './components/TaskCard';
import AddTaskCard from './components/AddTaskCard';

function App() {
    const [tasks, setTasks] = useState([]);
    const [submittedTask, setSubmittedTask] = useState(null);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    }

    const newTaskCard = (newTaskCard) => {
        setTasks([...tasks, newTaskCard]);
        setSubmittedTask(newTaskCard);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
        if(submittedTask && submittedTask.id === id) setSubmittedTask(null);
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
        <div className='FormTaskCard'>
            <h1>Add More Info about Task </h1>
            <AddTaskCard newTaskCard={newTaskCard} />
            {submittedTask && <TaskCard task={submittedTask} deleteTask={deleteTask} markAsComplete={markAsComplete} />}
        </div>
        </>
    );
}

export default App;
