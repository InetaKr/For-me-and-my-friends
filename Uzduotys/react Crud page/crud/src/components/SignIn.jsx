import React, { useState } from 'react';

const SignIn = ({ signIn, setShowSignIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

const handleSubmit = (e) => {
    e.preventDefault();
    signIn({ username, password });
    setShowSignIn(false);
}

return (
<form className='SignInForm' onSubmit={handleSubmit}>
    <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
    <input type="submit" value="Sign In" />
</form>
);
};

export default SignIn;
