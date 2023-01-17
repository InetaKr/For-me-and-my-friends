
import NavBar from "./NavBar";


const Header = () => {
    return (
        <>
        <NavBar /> 
        <div className="headerContent">
          <h1>Coffee And TV Is Life</h1>
          <p> Drink Some Coffe and Watch or <span> Die </span></p>
          <button>Drink/Watch</button>
        </div>
        </>      
    );
  }  
  export default Header;