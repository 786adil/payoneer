import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Login from './Login';
import DBdata from './DBdata';
import CC from './CC'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<DBdata />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
      </Router>
    </>

  );
}

export default App;
