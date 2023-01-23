import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { OrderProvider } from './OrderContext';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
 <OrderProvider>
    <App />
</OrderProvider>
</BrowserRouter>
);

