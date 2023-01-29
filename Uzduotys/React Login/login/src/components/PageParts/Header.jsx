import UserInfo from '../User/UserInfo';
import { Link, Outlet } from 'react-router-dom';
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import companyLogo from '../../images/logo.png';


const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={companyLogo} alt="" />
          </Link>
        </div>
        {loggedInUser ? (
          <div className="navBarWrapper">
            <div className='linkWrapper'>
            <div >
              <Link to="/">HOME </Link>
            </div>
            <div>
              <Link to="/user">Your Page</Link>
            </div>
            <div>
              <Link to="/newSeries">Add</Link>
            </div>
            </div>
            <UserInfo />
          </div>
        ) : (
          
          <div className="loginRegister">
            <Link to="/signIn">Sign In</Link>
            <br />
           
            <Link to="/signUp">Sign Up</Link>
          
          </div>
          
        )}
      </nav>
      <Outlet />
    </>
  );
}
 
export default Header;
