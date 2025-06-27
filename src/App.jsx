import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { fetchMe } from "./api/auth";
import { useEffect, useState } from "react";

function App () {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState({});
  
  useEffect(()=>{
    const getMe = async ()=>{
      const data = await fetchMe(token);
      setUser(data);
    }

    if (token) {
    getMe();
    }
  }, [token]);

  return (
    <div className="App">
      <header>
        <Register setToken={setToken}/>
        <Login setToken={setToken}/>
      </header>
      <div>
        Helloworld!
      </div>
    </div>
  ) 
};

export default App;