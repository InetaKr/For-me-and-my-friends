import UserContext from "../context/UserContext";
import { useState, useContext } from "react";

const Register = () => {
  const [formInputs, setFormInputs] = useState({
    userName: '',
    password: '',
    passwordRepeat: '',
    avatar: ''
  });
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { users, addNewUser, setLoggedInUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInputs.password !== formInputs.passwordRepeat) {
      setPasswordError(true);
      return;
    }
    if (users.find(user => user.userName === formInputs.userName)) {
      setInvalidUsername(true);
    } else {
      let newUser = {
        ...formInputs,
        id: Date.now(),
        level: 'user',
        isBanned: false
      };
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
        .then(response => response.json())
        .then(data => {
          addNewUser(newUser);
          setLoggedInUser(newUser);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          User name:
          <input type="text" name="userName" value={formInputs.userName}
            onChange={(e) => setFormInputs({ ...formInputs, userName: e.target.value })}
          />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formInputs.password}
            onChange={(e) => setFormInputs({ ...formInputs, password: e.target.value })}
          />
        </label>
        <label>
          Repeat Password:
          <input type="password" name="passwordRepeat" value={formInputs.passwordRepeat}
            onChange={(e) => setFormInputs({ ...formInputs, passwordRepeat: e.target.value })}
          />
        </label>
        <label>
          User picture:
          <input type="url" name="avatar" value={formInputs.avatar}
            onChange={(e) => setFormInputs({ ...formInputs, avatar: e.target.value })}
          />
        </label>
        <input type="submit" value="Register" />
      </form>
      {
        invalidUsername && <span>User with such name already exists.</span>
      }
      {
        passwordError && <span>Passwords do not match</span>
      }
    </>

  );
}
 
export default Register;