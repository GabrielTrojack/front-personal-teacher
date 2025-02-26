import React from 'react';
import './Footer.css'; 

const Footer = ({color}) => {
  return (
    <footer className="footer" style={{ backgroundColor: color }}>
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
