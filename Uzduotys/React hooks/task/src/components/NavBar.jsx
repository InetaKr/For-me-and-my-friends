import companyLogo from './images/logo.png'

const NavBar = ({ markedArticles }) => (
  <nav>
    <div className="logo">
      <img src={companyLogo} alt="" />
    </div>
    <div className="user-info">
      <div className="user-name">InetaKR</div>
      <div className="marked-articles">
        <div> Marked Articles {markedArticles}</div>
      </div>
    </div>
  </nav>
);

export default NavBar;


