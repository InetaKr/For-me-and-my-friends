import React from 'react';
import { CheckProvider } from './CheckContext';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import './App.css'

//apgaubiama OrderProvider, kuriame yra kontekstas, taip pat naudojamas router, kad butu uzkraunama ne viskas is karto, o po viena komponenta, ta kurio nori vartotojas
function App() {
  return (
    <CheckProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </CheckProvider>
  );
}

export default App;
