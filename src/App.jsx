import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";


function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState({});

  useEffect(()=>{
    const getMe = async ()=>{
      const data = await fetchMe(token);
      // console.log(data,'data inside useeffect getme');
      setUser(data);
      console.log(user,'this is user after setting in getme')
    }
    // getMe();
    if (token) {
      getMe()
    }
  }, [token]);

  return (
    <div className="App">
      <h1>Hello there!</h1>
      <p>Username: {user?.username}</p>
      <Register setToken={setToken}/>
    </div>
  );
}

export default App;
