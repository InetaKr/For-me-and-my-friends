import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/UserContext';
import { CardProvider } from './context/CardContext'
import { ChatProvider } from './context/ChatContext';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
   <UserProvider>
    <ChatProvider>
     <CardProvider> 
        <App />
      </CardProvider>
      </ChatProvider>
    </UserProvider>
</BrowserRouter>
);


