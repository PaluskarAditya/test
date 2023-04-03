import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <div className='overlay'>
        <Nav />
      </div>
    </div>
    </Router>
  );
}

export default App;
