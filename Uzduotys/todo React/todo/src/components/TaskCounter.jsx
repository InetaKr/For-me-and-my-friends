import React from 'react';

const TaskCounter = ({ tasks }) => {
    const incompleteTasks = tasks.filter(task => !task.completed);
    return <p>Task Left to Do: {incompleteTasks.length}</p>
}

export default TaskCounter;
