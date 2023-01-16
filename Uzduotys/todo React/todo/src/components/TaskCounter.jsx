
const TaskCounter = ({ tasks }) => {
    const incompleteTasks = tasks.filter(task => !task.completed);
    return <p className='TaskCounterp'>Task Left to Do: {incompleteTasks.length}</p>
}

export default TaskCounter;
