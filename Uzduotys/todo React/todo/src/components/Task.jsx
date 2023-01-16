const Task = ({ task, deleteTask, markAsComplete }) => {
    return (
        <div className={`task ${task.completed ? 'markAsComplete' : ''}`}>
            <p>{task.description}</p>
            <div className="taskButton">
                <button onClick={() => markAsComplete(task.id)} className="completedButton">Completed</button>
                <button onClick={() => deleteTask(task.id)} className='deleteButton'>Delete</button>
            </div>
        </div>
    );
}
export default Task