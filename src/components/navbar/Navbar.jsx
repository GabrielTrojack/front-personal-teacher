import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <a href="#sobre">Sobre</a>
      </div>
      <Link>
      <button className="login-btn">Sair</button>
      </Link>
    </nav>
  );
}

export default Navbar;
