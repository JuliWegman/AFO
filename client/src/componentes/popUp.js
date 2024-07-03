import React from 'react';

const popUp = ({children,open,close}) => {

  if (!open) return null

  return (
    <div>
      <div>
        <button onClick={close}>x</button>
      </div>
    <h2 className="popUpMensaje">
     hola
    </h2>
    </div>
  );
};

export default popUp;
