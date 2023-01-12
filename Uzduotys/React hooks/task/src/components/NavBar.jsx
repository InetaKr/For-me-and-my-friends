import React from 'react';

const NavBar = ({ markedArticles }) => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="user-info">
        <img src="user-icon.png" alt="user icon" />
        <span>User Name</span>
        <span>Marked Articles: {markedArticles}</span>
      </div>
    </div>
  );
};

export default NavBar
