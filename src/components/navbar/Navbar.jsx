import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import Modal from '../modal/modal';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()
  useEffect(() => { }, [token])

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    alert('Você foi deslogado!');
    closeModal();
    navigate('/')
    localStorage.clear();
    window.location.reload();
  };

  const handleHome = () => {
    document.title = "Personal Teacher";
    navigate('/')
  }

  const handleLogin = () => {
    document.title = "Personal Teacher";
    navigate('/login')
  }

  const handleSobre = () => {
    document.title = "Personal Teacher";
    navigate('/about')
  }

  const handleResults = () => {
    document.title = "Personal Teacher";
    navigate('/perfil')
  }


  return (
    <nav className="navbar">
      <div onClick={handleHome} className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div onClick={handleSobre} className="nav-links">
        <a>Sobre</a>
      </div>

      {token ?
        <>
          <div onClick={handleResults} className="user-link">
            <a href="/perfil">Meus resultados</a>
          </div>
          <button onClick={openModal} className="login-btn">Sair</button>
        </> :
        <button onClick={handleLogin} className="login-btn">Login</button>}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleLogout}
      />
    </nav>
  );
}

export default Navbar;
