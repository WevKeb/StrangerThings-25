import React from "react";
import Register from "./Register";
import Login from "./Login";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = ({ user, setToken }) => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            {/* if user is logged in */}
            {user.username ? (
                <nav className="nav-links">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "active-link" : "nav-link"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/myposts"
                        className={({ isActive }) =>
                            isActive ? "active-link" : "nav-link"
                        }
                    >
                        My Posts
                    </NavLink>
                    <NavLink
                        to="/createpost"
                        className={({ isActive }) =>
                            isActive ? "active-link" : "nav-link"
                        }
                    >
                        Create New Post
                    </NavLink>
                    <div className="logout-corner">
                        <div id="hello-user">Hello {user.username}!</div>
                        <button
                            id="logout-btn"
                            onClick={() => {
                                setToken('');
                                localStorage.removeItem('token');
                                navigate("/");
                                window.location.reload();
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </nav>
            ) : (
                <nav className="nav-links">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "active-link" : "nav-link"
                        }
                    >
                        Home
                    </NavLink>
                    <Login setToken={setToken} />
                </nav>
            )}
        </div>
    );
};

export default Header;
