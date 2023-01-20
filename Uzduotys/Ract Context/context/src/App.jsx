import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'
import { Route, Routes } from 'react-router-dom'

const App =() => {
  return (
    <>
    <header>
      <Navigation />
    </header>
    <main>
      <Routes>
        <Route path='/' element={
          <Home />
        }/>
        <Route path='/add' element={
          <Add />
        }/>
        <Route path='/edit' element={
          <Edit />
        }/>
      </Routes>
    <footer>
      
    </footer>  
    </main>
    </>
  );
}

export default App;
