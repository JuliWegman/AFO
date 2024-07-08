import React from 'react';

const Modal = ({children,open,close}) => {
  console.log("aaaaaaaaaa");
  if (!open) return null

  return (
    <div className="popUpMensaje">
      <div>
        <button onClick={close}>x</button>
      </div>
    <h2>
     hola
    </h2>
    </div>
  );
};

export default Modal;
