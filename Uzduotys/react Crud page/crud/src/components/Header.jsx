
import NavBar from "./NavBar";


const Header = () => {
    return (
        <>
        <NavBar /> 
        <div className="headerContent">
          <h1>Coffee Is Life</h1>
          <p> Drink Some Coffe or <span> Die </span></p>
          <button>Drink</button>
        </div>
        </>      
    );
  }  
  export default Header;