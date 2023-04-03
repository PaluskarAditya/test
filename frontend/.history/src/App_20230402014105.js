import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='overlay'>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
