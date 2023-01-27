import UserContext from "../context/UserContext";
import { useContext } from "react";

const UserInfo = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const logOutUser = () => {
    setLoggedInUser(null);
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
        {loggedInUser && loggedInUser.level === 'admin' && <span>Admin</span>}
        {loggedInUser && (
          <button onClick={() => logOutUser()}>LogOut</button>
        )}
      </div>
    </div>
  );
}

export default UserInfo;
