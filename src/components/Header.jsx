import React from 'react';
import Register from './Register';
import Login from './Login';

const Header = ({user, setToken}) => {
    return (
        <div>
            {user.username ? 
                <nav className="loggedin-header">
                    Hello {user.username}!
                </nav>
                :
                <nav>
                    <Register setToken={setToken}/>
                    <Login setToken={setToken}/>
                </nav>
             }
        </div>
    );
};

export default Header;