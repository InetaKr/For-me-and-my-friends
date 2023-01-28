import UserContext from "../context/UserContext";
import CardContext from "../context/CardContext";
import { useContext } from "react";
import { Link } from "react-router-dom";






const SingleSeries = ({ data }) => {

  const { users, loggedInUser } = useContext(UserContext);
  const { deleteSeries, series, setSeries } = useContext(CardContext);
  

  const seriesPostOwner = users.find(user => user.id === data.userId);

  console.log(seriesPostOwner)

  const handleMark = async (id) => {
    // handle status of whether the series is marked or not
    const newSeries = series.map(singleSeries => {
      if (singleSeries.id === id) {
        return {
          ...singleSeries,
          isSeen: singleSeries.isSeen === 'marked' ? 'unmarked' : 'marked',
        };
      }
      return singleSeries;
    });
    setSeries(newSeries);
  
    // send PATCH request to server to update the "marked/unmarked" status in the JSON file
    const updatedSeries = newSeries.find(singleSeries => singleSeries.id === id);
    await fetch(`http://localhost:5000/series/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({isSeen: updatedSeries.isSeen}),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const handleLike = async (id) => {
    // handle status of whether the series is liked or not
    const newSeries = series.map(singleSeries => {
      if (singleSeries.id === id) {
        return {
          ...singleSeries,
          isLiked: !singleSeries.isLiked,
        };
      }
      return singleSeries;
    });
    setSeries(newSeries);
  
    // send PATCH request to server to update the "liked/unliked" status in the JSON file
    const updatedSeries = newSeries.find(singleSeries => singleSeries.id === id);
    await fetch(`http://localhost:5000/series/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({isLiked: updatedSeries.isLiked}),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  

  return (
    <div style={{border:'3px solid black'}}>
      {seriesPostOwner && 
        <>
          <img
            src={seriesPostOwner.avatar}
            alt="user avatar"
            style={{width:'30px', height:'auto'}}
          />
          <span>{seriesPostOwner.userName}</span>
        </>
      }
      {
        loggedInUser && loggedInUser.id === seriesPostOwner.id &&
        <>
          <button onClick={() => deleteSeries(data.id)}>Delete</button>
          <button><Link to={`/editSeries/${data.id}`}>Edit</Link></button>
        </>
      }
      <hr />
      <img src={data.image} alt={data.name} />
      <h1>{data.name}</h1>
      <p><span>Season:</span> Season {data.season}</p>
      <p><span>Year:</span> {data.year}</p>
      <p><span>Genre:</span> {data.genre}</p>
      <p><span>Description:</span>{data.description}</p>
      <p><span>Seen:</span> <input type="checkbox" checked={data.isSeen === 'marked'} onChange={() => handleMark(data.id)} /></p>
      <button onClick={() => handleLike(data.id)}>
  {data.isLiked ? <i className="fa fa-heart"></i> : <i className="fa fa-heart-o"></i>}
</button>




    </div>
  );

}
 
export default SingleSeries;