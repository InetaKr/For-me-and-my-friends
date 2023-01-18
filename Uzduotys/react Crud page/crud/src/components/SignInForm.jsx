import { useState } from "react";

const SignInForm = (props) => {
  const [userLogin, setUserLogin] = useState({
    name: '',
    password: ''
  });
  
 
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

