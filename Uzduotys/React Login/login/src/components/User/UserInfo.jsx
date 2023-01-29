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
    <div className="userInfo">
      <div >
      
        {loggedInUser && (
          <img
            src={loggedInUser.avatar}
            alt="user avatar"
            
          />
        )}
        {loggedInUser && <span>{loggedInUser.userName}</span>}
      </div>
      <div >
        {loggedInUser && (
          <button onClick={() => logOutUser()}>Log Out</button>
        )}
      </div>
    </div>
  );
}

export default UserInfo;
