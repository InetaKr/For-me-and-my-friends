import React, { useState } from 'react';

const UpdateSeriesForm = ({ series, handleUpdateSeries, onChange }) => {
  const [updatedSeries, setUpdatedSeries] = useState({ ...series });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedSeries({ ...updatedSeries, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateSeries(series.id, updatedSeries);
    onChange();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={updatedSeries.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Season:
        <input
          type="text"
          name="season"
          value={updatedSeries.season}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Year:
        <input
          type="text"
          name="year"
          value={updatedSeries.year}
          onChange={handleInputChange}
        />
      </label>
      <button 
      type="submit"
      onChange={() => handleUpdateSeries(series.id, updatedSeries)}
      >Save</button>
      </form>
    );
};
export default UpdateSeriesForm; 
