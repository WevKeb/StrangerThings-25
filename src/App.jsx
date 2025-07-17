
import Register from "./components/Register";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import PostsList from "./components/PostsList";
import { fetchMe } from "./api/auth";
import { useEffect, useState } from "react";
import { fetchAllPosts } from "./api/auth";
import Header from "./components/Header";

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  //useeffect to retrieve logged in user data. set to user, when token is set
  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUser(data);
    }

    if (token) {
      getMe();
      // console.log('this is user set in getMe useeffect', user);
    }
  }, [token]);

  //useeffect to setinitialposts on first render
  useEffect(() => {
    const getInitialPosts = async () => {
      try {
        const postsToSet = await fetchAllPosts();
        setPosts(postsToSet);
      } catch (error) {
        console.error('Error getting initial posts:', error)
      }
    }
    getInitialPosts();
  }, [])

  return (
    <div className="App">
      <Header user={user} setToken={setToken} />
      <Routes>
        <Route
          path='/'
          element={<PostsList posts={posts} setPosts={setPosts} />}
        ></Route>
        <Route
          path='/register'
          element={<Register setToken={setToken} />}
        ></Route>
        <Route
          path='/createpost'
          element={<CreatePost setToken={setToken} />}
        ></Route>
        {/* add route for user 'mypage' */}
      </Routes>

    </div>
  )
};

export default App;