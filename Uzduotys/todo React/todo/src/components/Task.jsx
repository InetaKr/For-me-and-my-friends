
const Task = ({ task, deleteTask, markAsComplete }) => {
    return (
        <div className={`task ${task.completed ? 'markAsComplete' : ''}`}>
            <p>{task.description}</p>
            <button onClick={() => markAsComplete(task.id)}>Completed</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
}
export default Task