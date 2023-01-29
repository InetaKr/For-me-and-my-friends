import { createContext, useState, useEffect } from 'react'

const UserContext = createContext ();

const UserProvider = ({ children }) => {

    const [loggedInUser, setLoggedInUser] = useState();

    const [users, setUsers] = useState ([]);



    useEffect (() => {
        const data = async () => {
           const res = await fetch('http://localhost:5000/users');
           const data = await res.json();
           setUsers(data);
        };
        data();
}, []);

const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  }

  const banOrUnbanUser = async (id) => {
    setUsers(users.map(user => user.id.toString() === id.toString() ? {...user, isBanned:!user.isBanned} : user)); 

    // Find the user by id and update their isBanned property in the JSON file
    const userToUpdate = users.find(user => user.id.toString() === id.toString());
    userToUpdate.isBanned = !userToUpdate.isBanned;

    // Send a PUT request to the server to update the user data in the JSON file
    await fetch(`http://localhost:5000/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userToUpdate)
    });
}


return (
    <UserContext.Provider
    value={{
        users,
        setUsers,
        addNewUser,
        banOrUnbanUser,
        loggedInUser,
        setLoggedInUser
      }}
    >
        {children}
    </UserContext.Provider>
);
}

export {UserProvider};
export default  UserContext;