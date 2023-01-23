import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CheckProvider } from './CheckContext';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
 <CheckProvider>
    <App />
</CheckProvider>
</BrowserRouter>
);
