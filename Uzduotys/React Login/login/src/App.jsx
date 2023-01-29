import './styles/App.css';
import Header from './components/PageParts/Header';
import Main from './components/PageParts/Main';
import Register from './components/User/Register';
import Login from './components/User/Login';
import UserPage from './components/User/UserPage';
import { Routes, Route } from 'react-router-dom';
import NewSeriesForm from './components/Series/NewSeriesForm';
import EditSeriesForm from './components/Series/EditSeriesForm';



const App = () => {
  return (
    <>
     <Routes>
        <Route element={<Header />}>
        <Route path="/" element={<Main />}/>
        <Route path="/user" element={<UserPage />}/>
        <Route path="/newSeries" element={<NewSeriesForm />}/>
        <Route path="/editSeries/:id" element={<EditSeriesForm />}/>
        </Route>
        

        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    
    </>
  );
}

export default App;