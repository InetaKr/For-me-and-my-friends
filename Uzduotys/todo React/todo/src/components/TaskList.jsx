
import Task from './Task';

const TaskList = ({ tasks, deleteTask, markAsComplete }) => {
    return (
        <div>
            {tasks.map(task => (
                <Task key={task.id} task={task} deleteTask={deleteTask} markAsComplete={markAsComplete} />
            ))}
        </div>
    );
}

export default TaskList;
