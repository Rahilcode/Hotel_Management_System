import React, { useState } from 'react'
import '../css/login.css'
import {
    Link
  } from "react-router-dom";
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [cname, setCname] = useState("");
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const register = () => {
      axios.post('http://localhost:5000/register', {
        cname: cname,
        phone: phone,
        email: email, 
        address: address,
        username: username,
        pass: pass
      })
      .then((response) => {
        console.log(response);
      })
    }
 
    return (
        <>
          <div className="form-container">
            <form action="/login" className="form">
              <h1>Register</h1>
              <div className="form-item">
                <label htmlFor="cname"><input value={cname} type="text" placeholder='Enter Name' id='cname' name='cname' onChange={(e) => {
                  setCname(e.target.value)
                }} /></label>
              </div>
              <div className="form-item">
                <label htmlFor="phone"><input value={phone} type="text" placeholder='Enter Phone' id='phone' name='phone' onChange={(e) => {
                  setPhone(e.target.value)
                }} /></label>
              </div>
              <div className="form-item">
                <label htmlFor="email"><input value={email} type="text" placeholder='Enter Email' id='email' name='email' onChange={(e) => {
                  setEmail(e.target.value)
                }} /></label>
              </div>
              <div className="form-item">
                <label htmlFor="address"><input value={address} type="text" placeholder='Enter Address' id='address' name='address' onChange={(e) => {
                  setAddress(e.target.value)
                }} /></label>
              </div>
              <div className="form-item">
                <label htmlFor="username"><input value={username} type="text" placeholder='Username' id='username' name='username' onChange={(e) => {
                  setUsername(e.target.value)
                }} /></label>
              </div>
              <div className="form-item">
                <label htmlFor="password"><input value={pass} type="password" placeholder='password' id='password' name='password' onChange={(e) => {
                  setPass(e.target.value)
                }} /></label>
              </div>
              <button onClick={register} type="submit" className='login-btn btn btn-danger'>Sign Up</button>
            <div className="register">
            <h5><Link className="nav-link text-white" to="/login">-Login-</Link></h5>
            </div>
            </form>
          </div>
        </>
    )
}

export default Signup
