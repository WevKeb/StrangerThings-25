import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import PostsList from "./components/PostsList";
import { fetchMe } from "./api/auth";
import { useEffect, useState } from "react";
import { fetchAllPosts } from "./api/auth";

function App () {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  
  useEffect(()=>{
    const getMe = async ()=>{
      const data = await fetchMe(token);
      setUser(data);
    }

    if (token) {
    getMe();
    }
  }, [token]);

  useEffect( ()=>{
    const getInitialPosts = async ()=>{
      try {
        const postsToSet = await fetchAllPosts();
        console.log(postsToSet,'this is poststoset inside the useeffect');
        setPosts(postsToSet);
      } catch (error) {
        console.error('Error getting initial posts:',error)
      }
    }
    getInitialPosts();
  }, [])

  return (
    <div className="App">
      <header>
        <Register setToken={setToken}/>
        <Login setToken={setToken}/>
      </header>
      <div>
        <PostsList posts={posts} setPosts={setPosts}/>
      </div>
    </div>
  ) 
};

export default App;