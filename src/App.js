import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Components/Signup/Signup';

function App() {
  return (
        <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;



