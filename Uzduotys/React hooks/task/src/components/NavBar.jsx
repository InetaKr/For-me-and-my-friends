import companyLogo from './images/logo.png'
import React, { useState } from 'react';
import SignIn from './SignIn';

const NavBar = ({ markedArticles, signIn, loggedIn, username }) => {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <nav>
      <div className="logo">
        <img src={companyLogo} alt="" />
      </div>
      <div className="user-info">
        {loggedIn ? (
          <div className="user-name">Welcome, {username}</div>
        ) : (
          <div className="sign-in" onClick={() => setShowSignIn(!showSignIn)}>
            Sign In
          </div>
        )}
        <div className="marked-articles">
          <div> Marked Articles {markedArticles}</div>
        </div>
      </div>
      {showSignIn && <SignIn signIn={signIn} setShowSignIn={setShowSignIn} />}
    </nav>
  );
};

export default NavBar;


