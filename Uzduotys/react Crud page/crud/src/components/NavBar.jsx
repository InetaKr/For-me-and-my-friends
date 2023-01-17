import { useState } from "react";

const NavBar = (props) => {
  const [userLogin, setUserLogin] = useState({
    name: '',
    password: ''
  });
  const [status, setStatus] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showSignInButton, setShowSignInButton] = useState(true); //new state variable
  
  //function to handle the sign-in button click
  const handleSignInClick = () => {
    setShowForm(true);
    setShowSignInButton(false); //hide the sign-in button
  }

  //function to handle the successful login
  const handleSuccessfulLogin = () => {
    setShowForm(false);
  }

  //updating name and password property
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

  //fetching from signIn.json server, comparing values of userLogin.name and userLogin.password
  const handleSubmit = async (e) => {
    e.preventDefault();
    const signInDuomenys = await fetch('http://localhost:5000/users')
      .then(rez => rez.json());
    //iterating through signIn.json
    let isLogin = false;
    for (let i = 0; i < signInDuomenys.length; i++) {
      if (userLogin.name === signInDuomenys[i].name && userLogin.password === signInDuomenys[i].password) {
        isLogin= true;
        break;
      }
    }
    if (isLogin) {
      setStatus(`Welcome, ${userLogin.name}`);
      handleSuccessfulLogin();
    } else {
      setStatus('Invalid Username or password');
    }
  }
  return (
    <>
      {showSignInButton && (
        <button className="sign-in" onClick={handleSignInClick}>Sign In</button>
      )}
      {showForm && (
        <form onSubmit={handleSubmit}>
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
) }
{ status && <div>{status}</div> }
</>
);
}
export default NavBar;




