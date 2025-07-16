import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    
    return (
       // if no user logged in, display register button in nav 
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                {/* <li><Link to="/contact">Contact</Link></li> */}
            </ul>
        </nav>
    );
};

export default Navbar;