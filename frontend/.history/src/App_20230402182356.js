import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Menu from './components/Menu';
import Login from './components/Login';
import { useEffect } from 'react';
import Signup from './components/Menu';

function App() {
  useEffect(()=>{
    document.body.style.backgroundImage = "url('../public/bg-main.jpg')"
  }, [])
  return (
    <Router>
      <div className="App">
        <div className='overlay'>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signp' element={<Signup />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
