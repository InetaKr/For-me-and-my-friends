import React, { useState } from 'react';

const AddTaskCard = ({ newTaskCard }) => {
    const [TaskCardtitle, setTitle] = useState('');
    const [TaskCardimage, setImage] = useState('');
    const [TaskCardDescription, setDescription] = useState('');

    const handleCardSubmit = (e) => {
        e.preventDefault();
        if (!TaskCardtitle || !TaskCardimage || !TaskCardDescription) {
            return;
        }
        newTaskCard({ id: Date.now(), TaskCardtitle, TaskCardimage, TaskCardDescription });
        setTitle('');
        setImage('');
        setDescription('');
    }

    return (
        <form onSubmit={handleCardSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    placeholder="Task Title"
                    value={TaskCardtitle}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Image:</label>
                <input
                    type="text"
                    placeholder="Task Image"
                    value={TaskCardimage}
                    onChange={e => setImage(e.target.value)}
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    placeholder="Task Description"
                    value={TaskCardDescription}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTaskCard;
