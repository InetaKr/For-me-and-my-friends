import UserContext from "../context/UserContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [formInputs, setFormInputs] = useState({
    userName: '',
    password: '',
  });
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [userIsBanned, setUserIsBanned] = useState(false);
  const navigation = useNavigate();


  const { users, setLoggedInUser } = useContext(UserContext);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedInUser = users.find(user => user.userName === formInputs.userName && user.password === formInputs.password);

    if(!loggedInUser.isBanned){
      setLoggedInUser(loggedInUser);
      navigation('/');
    } else if(loggedInUser.isBanned){
      setUserIsBanned(true);
    } else {
      setInvalidCredentials(true);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          User name:
          <input type="text" name="userName" value={formInputs.userName}
            onChange={(e) => setFormInputs({...formInputs, userName:e.target.value})}
          />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formInputs.password}
            onChange={(e) => setFormInputs({...formInputs, password:e.target.value})}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
      {
        invalidCredentials && <span>Invalid username or password.</span>
      }
      {
    userIsBanned && <span>Your account is banned.</span>
}

    </>
  );
}
 
export default Login;
