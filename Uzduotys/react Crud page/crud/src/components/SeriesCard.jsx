


function SeriesCard({ series, onDeleteSeries }) {

  const handleDelete = () => {
    onDeleteSeries(series.id);
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
      
      <button onClick={handleDelete}>Delete</button>
     
    </div>
  );
}

export default SeriesCard;