import React from 'react';
import { useState } from 'react';
import { loginUser } from '../api/auth';

const Login = ({setToken}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
      
      return (
        <div>
          <form 
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
        </div>
      );
};

export default Login;