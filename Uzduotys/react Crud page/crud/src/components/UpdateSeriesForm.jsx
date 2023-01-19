import  { useState } from 'react';


///komponentas kuris naudojamas update infomacija serijalu-serijalu watchliste.
///komponentas gauna 3 propsus
//series-serijalo objektas kuris yra updatinamas
///handleUpdateSeries-callback funkcija kuri naudojama updatinti serijala parent elementa siupo atveju SeriesCard komponente
// komponentas nurodo local state variable updatedSeries, kuris incijuojamas su serijalo props values ir yra naudojams to store updatinta infomacija
 
const UpdateSeriesForm = ({ series, handleUpdateSeries, onChange }) => {
  const [updatedSeries, setUpdatedSeries] = useState({ ...series });

  ///si funkcija updatina updatedSeries state variable su naujomis inputo values.
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedSeries({ ...updatedSeries, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateSeries(series.id, updatedSeries);
    onChange();
  };


  ///komponentas turi forma su inputo fieldais kiekvinam serijalo objekto properties. 
  //kiekvieno inputo value is set tinkmai property updatedSeries state varibale.
  ///kiekviana inputas turi onChange eventa kuris calina handleInputchange funkcija
  ///komponentas taip pat turi submit button kuris kai paspaudi preventin default ir iskvieca handleUpdatedSeries callback funkcija kuri passing in serijalo su tam tikru id 
  // It also has a submit button that, when clicked, calls the handleUpdateSeries function with the updated series data and the id of the series being updated. It also calls the onChange callback function which is used to toggle the isEditing state back to false in the parent component.
  
 
 return (
    <form onSubmit={handleSubmit} className="UpdateForm">
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
      <label>
        Genre:
        <input
          type="text"
          name="genre"
          value={updatedSeries.genre}
          onChange={handleInputChange}
        />
      </label>
      <label>
      Is seen:
        <input
          type="checkbox"
          name="isSeen"
          value={updatedSeries.isSeen}
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
