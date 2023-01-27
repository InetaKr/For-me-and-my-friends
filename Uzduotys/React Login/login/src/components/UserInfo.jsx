import UserContext from "../context/UserContext";
import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const navigation = useNavigate();

  const logOutUser = () => {
    setLoggedInUser(null);
    navigation('/');
  }

  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <div style={{display:'flex', justifyContent:'flex-start'}}>
      <Link to="/">HOME</Link>
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
        {loggedInUser && loggedInUser.level === 'admin' && <span>Admin</span> && <Link to="/admin">Manage Users</Link>}
        {loggedInUser && (
          <button onClick={() => logOutUser()}>LogOut</button>
        )}
      </div>
    </div>
  );
}

export default UserInfo;
