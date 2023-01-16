import React, { useState } from 'react';


function EditSeriesForm({ series, onEditSeries }) {
    const [name, setName] = useState(series.name);
    const [season, setSeason] = useState(series.season);
    const [year, setYear] = useState(series.year);
    const [genre, setGenre] = useState(series.genre);
    const [views, setViews] = useState(series.views);
    const [isSeen, setIsSeen] = useState(series.isSeen);
    const [image, setImage] = useState(series.image);
  
    const handleSubmit = event => {
      event.preventDefault();
      const editedSeries = { name, season, year, genre, views, isSeen, image };
      onEditSeries(editedSeries);
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
        <button type="submit">Save Changes</button>
      </form>
    );
  }
  
  export default EditSeriesForm;
  