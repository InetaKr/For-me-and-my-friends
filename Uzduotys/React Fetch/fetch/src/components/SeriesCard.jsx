import EditSeriesForm from "./EditSeriesForm";
import React, { useState } from 'react';


function SeriesCard({ series, onDeleteSeries, onEditSeries }) {
const [isEditFormOpen, setIsEditFormOpen] = useState(false); 
  const handleDelete = () => {
    onDeleteSeries(series.id);
  };

  const handleEdit = () => {
    setIsEditFormOpen(!isEditFormOpen);
  };

  return (
    <div>
      <img src={series.image} alt={series.name} />
      <h2>{series.name}</h2>
      <p>Season: {series.season}</p>
      <p>Year: {series.year}</p>
      <p>Genre: {series.genre}</p>
      <p>Views: {series.views}</p>
      <p>Seen: {series.isSeen ? 'Yes' : 'No'}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      {isEditFormOpen && <EditSeriesForm series={series} onEditSeries={onEditSeries} /> }
    </div>
  );
}

export default SeriesCard;
