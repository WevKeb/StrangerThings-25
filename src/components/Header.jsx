import React from 'react';
import Register from './Register';
import Login from './Login';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = ({user, setToken}) => {
    return (
        <div className='navbar'>
            {user.username ? 
                <nav className="nav-links">
                    <NavLink
                        to='/'
                        end
                        className={({isActive})=>
                            isActive ? 
                            'active-link'
                            :
                            'nav-link'
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to='/myposts'
                        className={({isActive})=>
                            isActive ? 
                            'active-link'
                            :
                            'nav-link'
                        }
                    >
                        My Posts
                    </NavLink>
                    <div className="logout-corner">
                        <div id="hello-user">Hello {user.username}!</div>
                        <button id="logout-btn">Logout</button>
                    </div>
                </nav>
                
                :

                <nav className='nav-links'>
                    <NavLink
                        to='/'
                        end
                        className={({isActive})=>
                            isActive ? 
                            'active-link'
                            :
                            'nav-link'
                        }
                    >
                        Home
                    </NavLink>
                    <Login setToken={setToken}/>
                </nav>
             }
        </div>
    );
};

export default Header;