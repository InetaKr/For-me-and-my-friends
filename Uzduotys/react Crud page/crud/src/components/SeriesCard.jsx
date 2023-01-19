import React, { useState } from 'react';
import UpdateSeriesForm from './UpdateSeriesForm';

///komponentas serijalu korteles kuri displayina serijalu infomacija ir leidzia useriui is deletinti ar updatinti serijalo info 
//komponentas turi viena state variable, kuris tikrina ar useris editina serijala ar nea 

const SeriesCard =({ series, onDeleteSeries, handleUpdateSeries })=> {
    const [isEditing, setIsEditing] = useState(false);
///komponentas turoi keleta funkciju 
//handleUpdate funkcija iskvieciama kai useris submitina forma kuri updatina serijalus..is editing statas yra false, del to nerodo formos
 
    const handleUpdate = () => {
        setIsEditing(false);
    };  
//the handleDelete funkcija isvieciam kai useris pakliklin delete buttona. paspaudus funkcija issaukia kita ondeleteseries funkcija kuri perduoda kaip prop komponentui
//funkcija passina serijalo id kai argumenta.
  const handleDelete = () => {
    onDeleteSeries(series.id);
  };
//handleEditClick finkcija iskvieciama kai useris klikina edit mygtuka... funkcija toglina per isediting stata. del to rodo arba hidina updateseriesforma
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  ///komponentas renfina diva kurima yra serijalo infomacija
  //taip pat renfina du buttonus kuris editina ir kitas kuris deletina
  //taip pat rendina UpdateSeriesForm konmponenta tuoj atveju jei isediting statas yra true,praeina per serijalio objekta
  //handleUpdateSeries funkcija ir onchange funkcija perduota kaip propsai 

 
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

///apskritai komponentas atsakingas uz serijalo korteles displayju ir jo infomacijos displayju... taip pat pateikia formos funkcionaluma
