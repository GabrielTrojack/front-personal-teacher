import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';

const Footer = ({color}) => {
  return (
    <footer className="footer" style={{ backgroundColor: color }}>
      <div className="footer-content">
        <p>&copy; 2025 Personal Teacher. Todos os direitos reservados.</p>
        <div className="footer-links">
          <Link to ='/terms'>
          <a href="/termos">Termos de Uso</a>
          </Link>
          <span>  </span>
          <Link to='/privacy-policy'>
          <a href="/politica-privacidade">Política de Privacidade</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
