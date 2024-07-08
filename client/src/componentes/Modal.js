import React from 'react';
import "../css/modal.css"

const Modal = ({children,open,close}) => {
  if (!open) return null

  return (
    <div className="popUpMensaje">
      <div className='boton'>
        <button onClick={close}><div className='x'>x</div></button>
      </div>
    {children}
    </div>
  );
};

export default Modal;
