import { useState } from "react";

const SignIn = ({userStatusHandler}) => {

  const [userLogin, setUserLogin] = useState({
    username:'',
    password:''
  });

  const handleUserInput = (e) => {
    switch(e.target.name){
      case 'username':
        setUserLogin({
          ...userLogin,
          username: e.target.value
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

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(userLogin);
    const SignInDuomenys = await fetch('http://localhost:8000/userinfo')
      .then(res => res.json());

    const user = SignInDuomenys.find(user => user.username === userLogin.username && user.password === userLogin.password)
      if(user){
        userStatusHandler('Welcome back ' + userLogin.username);
      } else{
        userStatusHandler('Invalid username or password. Try again.');
      }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="username"
          value={userLogin.username}
          onChange={handleUserInput}
        />
        <input 
          type="password"
          name="password"
          value={userLogin.password}
          onChange={handleUserInput}
        />
        <input type="submit" value="Log In" />
      </form>
    </>
   );
}
 
export default SignIn;