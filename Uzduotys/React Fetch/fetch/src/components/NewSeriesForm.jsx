import React, { useState } from 'react';

function NewSeriesForm({ onAddSeries }) {
  const [name, setName] = useState('');
  const [season, setSeason] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [views, setViews] = useState('');
  const [isSeen, setIsSeen] = useState(false);
  const [image, setImage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onAddSeries({ name, season, year, genre, views, isSeen, image });
    setName('');
    setSeason('');
    setYear('');
    setGenre('');
    setViews('');
    setIsSeen(false);
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Season:
        <input type="text" value={season} onChange={e => setSeason(e.target.value)} />
      </label>
      <label>
        Year:
        <input type="text" value={year} onChange={e => setYear(e.target.value)} />
      </label>
      <label>
        Genre:
        <input type="text" value={genre} onChange={e => setGenre(e.target.value)} />
      </label>
      <label>
        Views:
        <input type="text" value={views} onChange={e => setViews(e.target.value)} />
        </label>
      <label>
        Is seen:
        <input type="checkbox" checked={isSeen} onChange={e => setIsSeen(e.target.checked)} />
      </label>
      <label>
        Image:
        <input type="text" value={image} onChange={e => setImage(e.target.value)} />
      </label>
      <button type="submit">Add Series</button>
    </form>
  );
}
export default NewSeriesForm;