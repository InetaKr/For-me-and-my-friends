import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description) {
            return;
        }
        addTask({ id: Date.now(), description, completed: false });
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;
