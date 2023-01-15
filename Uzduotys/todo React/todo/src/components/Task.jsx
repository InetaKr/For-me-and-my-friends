

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faClose } from '@fortawesome/free-solid-svg-icons'

const Task = ({ task, deleteTask, markAsComplete }) => {
    return (
        <div>
            <p>{task.description}</p>
            <button onClick={() => markAsComplete(task.id)}><FontAwesomeIcon icon={faCheckSquare} /></button>
            <button onClick={() => deleteTask(task.id)}><FontAwesomeIcon icon={faClose} /></button>
        </div>
    );
}
export default Task;