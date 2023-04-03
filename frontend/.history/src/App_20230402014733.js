import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Menu from './components/Menu';
import Login from './components/Login';

function App() {
  document.body.style.backgroundImage = "url('')"

  return (
    <Router>
      <div className="App">
        <div className='overlay'>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
