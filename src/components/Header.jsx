import React from 'react';
import Register from './Register';
import Login from './Login';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = ({user, setToken}) => {
    return (
        <div className='navbar'>
            {user.username ? 
                <nav className="loggedin-header">
                    Hello {user.username}!
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
                    <Login setToken={setToken}/>
                </nav>
             }
        </div>
    );
};

export default Header;