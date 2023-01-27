import './App.css';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom';
import AdminPage from './components/AdminPage';


const App = () => {
  return (
    <>
     <Routes>
        <Route element={<Header />}>
        <Route path="/" element={<Main />}/>
        <Route path="/admin" element={<AdminPage />}/>
        </Route>

        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    
    </>
  );
}

export default App;