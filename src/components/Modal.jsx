import React from 'react';
import '../styles/Modal.css';; // Asegúrate de que esta ruta sea correcta

function Modal({ show, message, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-close-button" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;