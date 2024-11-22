import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Nav.css';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false); 
    const navi = useNavigate();

    const isLoggedIn = !!localStorage.getItem('authToken'); 

    const handleMenuClick = () => {
        setMenuOpen((prevState) => !prevState); 
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken'); 
        navi('/'); 
    };

    return (
        <nav>
            <h1 className="title">
                <NavLink to="/home">
                    <img src="/images/logo.jpeg" alt="chef" />
                </NavLink>
            </h1>
            <div className="menu" onClick={handleMenuClick} role="button" aria-expanded={menuOpen}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/orders">Orders</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                {isLoggedIn ? (
    <li className="user-icon">
        <FaUserCircle
            onClick={handleLogout}
            className="user-avatar"
            size={40} 
        />
    </li>
) : (
    <li><NavLink to="/">Login</NavLink></li>
)}
            </ul>
        </nav>
    );
}

export default NavBar;
