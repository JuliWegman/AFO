import React from 'react';
import "../css/modal.css"

const Modal = ({children,open,close}) => {
  if (!open) return null

  return (
    <div className="popUpMensaje">
    {children}
    </div>
  );
};

export default Modal;
