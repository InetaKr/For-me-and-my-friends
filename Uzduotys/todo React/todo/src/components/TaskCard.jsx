
const TaskCard = ({ task, deleteTask, markAsComplete}) => {
    return (
        <div>
            <h3>{task.TaskCardtitle}</h3>
            <img src={task.TaskCardimage} alt={task.TaskCardtitle}/>
            <p>{task.TaskCardDescription}</p>
            <div className="taskCardButton">
                <button onClick={() => markAsComplete(task.id)} className="completedCardButton">Completed</button>
                <button onClick={() => deleteTask(task.id)} className='deleteCardButton'>Delete</button>
            </div>
        </div>
    );
}

export default TaskCard;
