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
    <div className="seriesCards">
      <div className="ownerInfo">
      {seriesPostOwner && 
        <>
        <div className="series-info">
          <img
            src={seriesPostOwner.avatar}
            alt="user avatar" 
          />
          <span>{seriesPostOwner.userName}</span>
          </div>
        </>
      }
      
      {
        loggedInUser && loggedInUser.id === seriesPostOwner.id &&
        <>
        <div className="ownerButtons">
          <button onClick={() => deleteSeries(data.id)}>Delete</button>
          <button><Link to={`/editSeries/${data.id}`}>Edit</Link></button>
        </div>  
        </>
      }
      </div>
      <br/>
      <div className="seriesCardDataInfo">
        <>
      <img src={data.image} alt={data.name} />
      <h2>{data.name}</h2>
      <p><span>Season:</span> Season {data.season}</p>
      <p><span>Year:</span> {data.year}</p>
      <p><span>Genre:</span> {data.genre}</p>
      <p>{data.description}</p>
      </>
      </div>
      <div className="likeSeenWrapper">
        {loggedInUser &&
        <>
       <label className="switch"> 
      <input type="checkbox" checked={data.isSeen === 'marked'} onChange={() => handleMark(data.id)} />
      <span className="slider round"></span>
      </label>
      <button onClick={() => handleLike(data.id)} className="likeButton">
  {data.isLiked ? <i className="fa fa-heart"></i> : <i className="fa fa-heart-o"></i>}
</button>

</>



}
</div>

    </div>
    
  );

}
 
export default SingleSeries;