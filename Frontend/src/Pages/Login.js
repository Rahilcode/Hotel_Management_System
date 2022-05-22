import React, { useState } from 'react'
import '../css/login.css';
import {
  Link
} from "react-router-dom";
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [log, setLog] = useState(false);
  const [status, setStatus] = useState('');
  const [nuser, setNuser] = useState(true);

  const login = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', {
      username: username,
      pass: pass
    })
    .then((response) => {

      if(response.data.message) {
        
        setStatus(response.data.message);
        setLog(false);
        setNuser(false);
      } else {
        setNuser(true);
        if (username=='root' && pass=='root') {
          setLog(true);
        } else {
          setLog(false);
        }
        setStatus(`s`);
      }
      
    })
  }

    return (
        <>
          <div className="form-container">
            <form className="form">
              <h1>Login</h1>
              <div className="nouser text-center text-white">
                <p>{!nuser ? 'Invalid Username/Password' : ''}</p>
              </div>
              
              <div className="form-item">
                <label htmlFor="username"><input onChange={(e) => {
                  setUsername(e.target.value)
                }} type="text" placeholder='Username' id='username' name='username'/></label>
              </div>
              <div className="form-item">
                <label htmlFor="password"><input onChange={(e) => {
                  setPass(e.target.value)
                }} type="password" placeholder='password' id='password' name='password'/></label>
              </div>
              <button type="submit" className='login-btn btn btn-danger' onClick={login}>Login</button>
            <div className="register">
              {/* <a href=""><h5>-Or Register-</h5></a> */}
              <h5><Link className="nav-link text-white" to="/signup">-or Register-</Link></h5>
            </div>
            <div className="status text-center text-white">
                <h5 className='redirect'>{status==='s'? <h5>Successfully LoggedIn <button className='btn btn-dark'><Link to='/'  className='hlink text-white'> Home</Link></button></h5> : 'Please Enter the Username and Password'}</h5>
                <h5 className='redirect'>{log ? <h5>Manage Hotel <buuton className='btn btn-success'><Link to='/adminrooms' className='hlink text-white' > Admin</Link></buuton></h5> : ''}</h5>
            </div>
            </form>
            
            
          </div>
        </>
    )
}

export default Login
