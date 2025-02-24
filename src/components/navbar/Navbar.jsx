// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import './Navbar.css';  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Personal Teacher. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="/termos">Termos de Uso</a>
          <span> | </span>
          <a href="/politica-privacidade">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
