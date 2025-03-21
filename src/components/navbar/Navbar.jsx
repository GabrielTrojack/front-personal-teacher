import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import Modal from '../modal/modal';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };  

  const handleLogout = () => {
    console.log('Clicou no botão de logout!');
    localStorage.clear();
    alert('Você foi deslogado!');
    closeModal(); 
    navigate('/home ')
  };
  

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

      {token ? 
        <button onClick={openModal} className="login-btn">Sair</button> :
        (<Link to="/login">
          <button className="login-btn">Login</button>
        </Link>)}

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onConfirm={handleLogout} 
      />
    </nav>
  );
}

export default Navbar;
