import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Register from './components/Register';
import Login from './components/Login';
import UserPage from './components/UserPage';
import { Routes, Route } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import NewSeriesForm from './components/NewSeriesForm';


const App = () => {
  return (
    <>
     <Routes>
        <Route element={<Header />}>
        <Route path="/" element={<Main />}/>
        <Route path="/user" element={<UserPage />}/>
        <Route path="/admin" element={<AdminPage />}/>
        <Route path="/newSeries" element={<NewSeriesForm />}/>
        </Route>
        

        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    
    </>
  );
}

export default App;