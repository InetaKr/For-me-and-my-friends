import React, { useState } from 'react';
import UpdateSeriesForm from './UpdateSeriesForm';


const SeriesCard =({ series, onDeleteSeries, handleUpdateSeries })=> {
    const [isEditing, setIsEditing] = useState(false);

    const handleUpdate = () => {
        setIsEditing(false);
    };  

  const handleDelete = () => {
    onDeleteSeries(series.id);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
   
    <div className='seriesCards'>
      <img src={series.image} alt={series.name} />
      <h2>{series.name}</h2>
      <p><span>Season:</span> {series.season}</p>
      <p><span>Year:</span> {series.year}</p>
      <p><span>Genre:</span> {series.genre}</p>
      <p><span>Views:</span> {series.views}</p>
      <p><span>Seen:</span> {series.isSeen ? 'Yes' : 'No'}</p>
      <div className='buttonWrapper'>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      </div>
      {isEditing && (
        <UpdateSeriesForm
          series={series}
          handleUpdateSeries={handleUpdateSeries} 
          onChange={handleUpdate}        
        />
      )}
     </div>
    
    
  );
}

export default SeriesCard;