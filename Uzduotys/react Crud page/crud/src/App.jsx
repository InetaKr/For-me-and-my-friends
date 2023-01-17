import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';

const App = () => {
    const [users, setUsers] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [icon, setIcon] = useState('');
  
    useEffect(() => {
      fetch('/users.json')
        .then(response => response.json())
        .then(data => setUsers(data.users));
    }, []);

    const signIn = ({ username, password }) => {
        
   
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            setLoggedIn(true);
            setUsername(user.username);
            setIcon(user.icon);
        } else {
            alert('Invalid username or password');
        }
    }
  
    return (
        <div className="App">
            <NavBar signIn={signIn} loggedIn={loggedIn} username={username} icon={icon}/>
            <Header />
        </div>
    );
}

export default App;

