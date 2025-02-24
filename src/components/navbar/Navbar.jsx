import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to='/home'>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      </Link>
      <div className="nav-links">
        <a href="#sobre">Sobre</a>
      </div>
      <Link to="/login">
      <button className="login-btn">Login</button>
      </Link>
    </nav>
  );
}

export default Navbar;
