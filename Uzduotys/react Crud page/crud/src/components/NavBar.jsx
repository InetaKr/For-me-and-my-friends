import { useState } from "react";
import SignInForm from "./SignInForm";
import companyLogo from '../images/logo.png';




const NavBar = () => {
  ///komponentas turi 2 state variables kurie naudoja useState hooka
  const [showSignInButton, setShowSignInButton] = useState(true); ///naudojamas tam kad rodyti/nerodytu Sign In buttono
  const [status, setStatus] = useState('');//status naudojamas storinti users logino status
  
  ///komponentas turi dvi funkcijas
 

  const handleSignInClick = () => { //iskviecima kai signIn buttonas paspaustas ir tada nustato sign in butonos stata i false, taip atidaro Sign in Forma
    setShowSignInButton(false); 
  }

  const handleSuccessfulLogin = (status) => { ///funkcija perduodama kaip prop Sign in formos komponentui. Ji iskvieciama kai useris sekmingai prisijungia 
    setShowSignInButton(true); //funkcija setina showSignInButton state i true ir user state i praeita state.
    setStatus(status);
  }
  //Vartotojo informacijos skiltyje ji pagal salyga pateikia prisijungimo mygtuką arba SignInForm komponentą pagal showSignInButton steta 
  // taip pat pateikiamas vartotojo steitas, jei yra jo reikšmė.

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
          { status && <div className="user-name">{status}</div> }
      </div>
    </nav> 
    </>
  );
}

export default NavBar        

///apskritai komponentas atsakingas navigation bar aplikacija ir tvarko rpisijungimo funkcionalumą
//rodydama sign in forma kai useris clikina sign in butona
//ir tvarko sekminga prisijungima rodydamas welcome vartotojo vardas ir paslepdydamas sign in forma





