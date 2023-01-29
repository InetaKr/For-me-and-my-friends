import UserContext from "../../context/UserContext";
import CardContext from "../../context/CardContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const SingleSeries = ({ data }) => {

  const { users, loggedInUser } = useContext(UserContext);
  const { deleteSeries, handleLike, handleMark } = useContext(CardContext);
  

  const seriesPostOwner = users.find(user => user.id === data.userId);



  console.log(seriesPostOwner)

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

        {loggedInUser &&
        <>
      <p><span>Seen:</span> <input type="checkbox" checked={data.isSeen === 'marked'} onChange={() => handleMark(data.id)} /></p>
      <button onClick={() => handleLike(data.id)}>
  {data.isLiked ? <i className="fa fa-heart"></i> : <i className="fa fa-heart-o"></i>}
</button>
</>
}


    </div>
  );

}
 
export default SingleSeries;