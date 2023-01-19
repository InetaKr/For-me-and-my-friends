import { useState } from "react";

/// komponentas turi viena state variable-userlogin kuris yra objektas kuris laiko  user name ir password.  variable inicijuojams naudojant usestate hooka
const SignInForm = (props) => {
  const [userLogin, setUserLogin] = useState({
    name: '',
    password: ''
  });
  
  /// komponetas turi dvi funkcijas handleUserInput ir handleSubmit. 
  //The handleUserInput funkcija issaukiama kai useris types input fieldus ir uodatina state pagal tai.    
  const handleUserInput = (e) => {
    switch (e.target.name) {
      case 'name':
        setUserLogin({
          ...userLogin,
          name: e.target.value
        });
        break;
      case 'password':
        setUserLogin({
          ...userLogin,
          password: e.target.value
        });
        break;

      default:
        console.log('error');
    }
  }

  ///The handleSubmit funkcija issaukiama kai useris submitina forma. tada funkcija fetchina is serverio. funkcija expects array of userio infomacijos/objektu.
  //tada filtruoja users array ir iesko objekto su suvestais vartotojo name ir password
  //jhei randa tinkama user tada issaukia handleSuccessfulLogin .

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signInCredentials = await fetch('http://localhost:5000/users')
      .then(res => res.json());
    const user = signInCredentials.find(user => user.name === userLogin.name && user.password === userLogin.password);
    if (user) {
        props.handleSuccessfulLogin("Welcome, " + userLogin.name );
    } else {
      props.handleSuccessfulLogin("Invalid Username or password");
    }
  }
  //returnina forma su name ir password inputais ir button login...Itaip pat prijungia formos inputus to state, ir formos submission to the handleSubmit funckcija.
  return (
    <form onSubmit={handleSubmit} className="signInForm">
      <input
        type="text"
        placeholder="Username"
        name="name"
        value={userLogin.name}
        onChange={handleUserInput}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={userLogin.password}
        onChange={handleUserInput}
      />
      <button className="login" type="submit">Log In</button>
    </form>
);
}
export default SignInForm

///apskritai sita komponentas atsakingas uz  logino funkcioneluma
///handlina input forma su user info... duoda requesta serveriui ir tikrina ar useris yra valid ar ne..
///jei valid tai issaukiama  handleSuccessfulLogin funckcija is propsu kad parent elementas siu atveju NavBar zinotu kad login successful
///jei user invalid kalina ta pacia funkcija su kitokiu argumentu kad useris zinotu kad loginas nepavyko
