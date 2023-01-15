import React, { useState } from 'react';

const AddArticle = ({ addArticle }) => {
const [title, setTitle] = useState('');
const [photo, setPhoto] = useState('');
const [paragraphs, setParagraphs] = useState([]);

const handleSubmit = (e) => {
e.preventDefault();
const newArticle = {
id: Date.now(),
status: 'unmarked',
title,
photo,
paragraphs,
};
addArticle(newArticle);
}

return (
<form onSubmit={handleSubmit}>
<input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
<input type="text" placeholder="Image URL" value={photo} onChange={e => setPhoto(e.target.value)} />
<textarea placeholder="Paragraphs (one per line)" value={paragraphs.join('\n')} onChange={e => setParagraphs(e.target.value.split('\n'))} />
<input type="submit" value="Add Article" />
</form>
);
};

export default AddArticle;