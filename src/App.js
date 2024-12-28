import React, { useContext, useEffect,  } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import { Authcontext, fireebaseContext } from './store/Context';
import Create from './Components/Create/Create';

function App() {
  const {setUserid} =useContext(Authcontext)
  const {firebase}=useContext(fireebaseContext)

  useEffect(()=>{
    //console.log(user)
    firebase.auth().onAuthStateChanged((user)=>{
      setUserid(user)
   })

  })

  return (
        <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;



