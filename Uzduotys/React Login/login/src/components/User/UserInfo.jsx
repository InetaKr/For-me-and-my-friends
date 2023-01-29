import UserContext from "../../context/UserContext";
import CardContext from "../../context/CardContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const { resetIsLikedIsSeen } = useContext(CardContext)

  const navigation = useNavigate();

  const logOutUser = () => {
    setLoggedInUser(null);
    resetIsLikedIsSeen();
    navigation('/');
  }

  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <div style={{display:'flex', justifyContent:'flex-start'}}>
      
        {loggedInUser && (
          <img
            src={loggedInUser.avatar}
            alt="user avatar"
            style={{width:'30px', height:'auto'}}
          />
        )}
        {loggedInUser && <span>{loggedInUser.userName}</span>}
      </div>
      <div style={{display:'flex', justifyContent:'flex-end'}}>
        {loggedInUser && (
          <button onClick={() => logOutUser()}>LogOut</button>
        )}
      </div>
    </div>
  );
}

export default UserInfo;
