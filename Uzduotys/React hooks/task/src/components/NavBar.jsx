

const NavBar = ({ markedArticles }) => (
  <nav>
    <div className="logo">Example Site</div>
    <div className="user-info">
      <div className="user-name">John Doe</div>
      <div className="bookmarked-articles">
        <img src="" alt="" />
        <span>{markedArticles}</span>
      </div>
    </div>
  </nav>
);

export default NavBar;


