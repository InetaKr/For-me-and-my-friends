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
        <form onSubmit={handleCardSubmit} className="TaskCardForm">
            <div className='TaskCardTitle'>
                <label>Title:</label>
                <input
                    type="text"
                    value={TaskCardtitle}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className='TaskCardImage' >
                <label>Image URL:</label>
                <input
                    type="text"
                    value={TaskCardimage}
                    onChange={e => setImage(e.target.value)}
                />
            </div>
            <div className='TaskCardDescription'>
                <label>Description:</label>
                <textarea
                    value={TaskCardDescription}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTaskCard;
