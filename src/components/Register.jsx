import React from 'react';
import { useState } from 'react';
import { registerUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  return (
    <div className='reg-container'>
      <form
        className='reg-form'
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            const token = await registerUser(username, password);
            setToken(token);
            localStorage.setItem('token', token);
            setUsername('');
            setPassword('');
            navigate('/');
          } catch (error) {
            console.error(error);
          }

        }}>
        <h2>Create a new account here!</h2>
        <input
          value={username}
          type='text'
          placeholder='Username...'
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        ></input>
        <input
          value={password}
          type='password'
          placeholder='Password...'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        ></input>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
