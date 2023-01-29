import UserInfo from '../User/UserInfo';
import { Link, Outlet } from 'react-router-dom';
import UserContext from "../../context/UserContext";
import { useContext } from "react";



const Header = () => {

  const { loggedInUser } = useContext(UserContext);


  return (
    <>
     
    {
      loggedInUser ? (
     <div> 
      <UserInfo /> 
      <div className="addNewSeries">
      <Link to="/newSeries">Add New Series</Link>
    </div>
    <div><Link to="/">HOME</Link></div>
    <div>
      <Link to="/user">Your Page</Link>
    </div>
    
    </div>
   
      ):
      <div className="loginRegister">
        <Link to='/login'>Login</Link>
        <br />
        <Link to='/register'>Register</Link>
      </div>
      
    }

    <hr />
    <Outlet />
  </>
  );
}
 
export default Header;
