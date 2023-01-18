import { useState } from "react";
import SignInForm from "./SignInForm";
import companyLogo from '../images/logo.png'

const NavBar = () => {
  const [showSignInButton, setShowSignInButton] = useState(true); //new state variable
  const [status, setStatus] = useState('');
  
  //function to handle the sign-in button click
  const handleSignInClick = () => {
    setShowSignInButton(false); //hide the sign-in button
  }

  const handleSuccessfulLogin = (status) => {
    setShowSignInButton(true);
    setStatus(status);
  }

  return (
    <>
    <nav>
    <div className="logo">
        <img src={companyLogo} alt="" />
      </div>
      <div className="user-info">

      {showSignInButton && (
        <button className="sign-in" onClick={handleSignInClick}>Sign In</button>
        )}
        {!showSignInButton && (
        <SignInForm handleSuccessfulLogin={handleSuccessfulLogin}/>
        )}
         { status && <div>{status}</div> }
        </div>
       </nav> 
       </>
        );
        }
export default NavBar        




