import React, { useState } from 'react';
import UpdateSeriesForm from './UpdateSeriesForm';


const SeriesCard =({ series, onDeleteSeries, handleUpdateSeries })=> {
    const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    onDeleteSeries(series.id);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
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
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      {isEditing && (
        <UpdateSeriesForm
          series={series}
          handleUpdateSeries={handleUpdateSeries}         
        />
      )}
     
    </div>
  );
}

export default SeriesCard;