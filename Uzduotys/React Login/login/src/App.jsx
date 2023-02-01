import './styles/App.css';
import Header from './components/PageParts/Header';
import SignUp from './components/User/SignUp';
import SignIn from './components/User/SignIn';
import UserPage from './components/User/UserPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import NewSeriesForm from './components/Series/NewSeriesForm';
import EditSeriesForm from './components/Series/EditSeriesForm';
import Main from './components/PageParts/Main'
import Hero from './components/PageParts/Hero'
import ChatPage from './components/Chat/ChatPage';




const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname === '/' ? <Hero /> : null}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/newSeries" element={<NewSeriesForm />} />
        <Route path="/editSeries/:id" element={<EditSeriesForm />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path= "/chat" element ={< ChatPage />} />
      </Routes>
    </>
  );
}


export default App;