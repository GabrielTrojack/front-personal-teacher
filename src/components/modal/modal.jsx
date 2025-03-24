import React from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Tem certeza de que deseja sair?</h2>
        <button onClick={onConfirm} className="confirm-btn">Sim, sair</button>
        <button onClick={onClose} className="cancel-btn">Cancelar</button>
      </div>
    </div>
  );
};

export default Modal;
