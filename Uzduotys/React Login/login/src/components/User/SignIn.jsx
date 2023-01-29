import UserContext from "../../context/UserContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


const Singin = () => {
  const [formInputs, setFormInputs] = useState({
    userName: '',
    password: '',
  });

  const [userIsBanned, setUserIsBanned] = useState(false);
  const navigate = useNavigate();


  const { users, setLoggedInUser } = useContext(UserContext);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedInUser = users.find(user => user.userName === formInputs.userName && user.password === formInputs.password);

    if(!loggedInUser.isBanned){
      setLoggedInUser(loggedInUser);
      navigate('/');
    } else if(loggedInUser.isBanned){
      setUserIsBanned(true);
    } 
  }

  return (
    <>
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <div className="SignIn-form">
      <h2>Sign In</h2>
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
    userIsBanned && <span>Your account is banned.</span>
}
</div>
    </>
  );
}
 
export default Singin;
