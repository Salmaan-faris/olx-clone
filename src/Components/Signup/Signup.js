import React, { useContext, useState } from 'react';
import {Navigate, useNavigate} from "react-router-dom"

import Logo from '../../olx-logo.png';
import './Signup.css';
import { fireebaseContext } from '../../store/firebaseContext';

export default function Signup() {
  const navigate=useNavigate()
  const [uName,setUname]=useState('')
  const [email,setEmail]=useState('')
  const [phn,setPhn]= useState('')
  const [pssd,setPssd]=  useState('')
  const {firebase} = useContext(fireebaseContext)
  const handlesubmitt=(e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,pssd).then((result)=>{
      result.user.updateProfile({displayName:uName}).then(()=>{
        firebase.firestore().collection("users").add({
          id:result.user.uid,
          username:uName,
          phone:phn
          
        }).then(()=>{
          navigate("/login")
          

        })
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlesubmitt}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            //defaultValue="John"
            value={uName}
            onChange={(e)=>setUname(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            //defaultValue="John"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            //defaultValue="Doe"
            value={phn}
            onChange={(e)=>setPhn(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            //defaultValue="Doe"
            value={pssd}
            onChange={(e)=>setPssd(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
