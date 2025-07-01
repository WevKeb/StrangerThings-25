import React from 'react';
import { useState } from 'react';
import { loginUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = ({setToken}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
      
      return (
        <div className='navbar-login-corner'>
          <form 
            className="login-form"
            onSubmit={async (e)=>{
              try {
                e.preventDefault();
                const token = await loginUser(username, password);
                setToken(token);
                localStorage.setItem('token', token);
                setUsername('');
                setPassword('');
              } catch (error) {
                console.error(error);
              }
          }}
          >
            <input 
              value={username} 
              type='text' 
              placeholder='Username...'
              onChange={(e)=>{
                setUsername(e.target.value)
              }}
            ></input>
            <input 
              value={password} 
              type='password' 
              placeholder='Password...'
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            ></input>
            <button type='submit'>Login</button>
            
            
          </form>
          <span className='divider'>|</span>
          <button
              onClick={()=>{
                navigate('/register');
              }}
            >New User? Register Here!</button>
        </div>
      );
};

export default Login;