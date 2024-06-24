import React from 'react';
import '../css/desplegable.css';

const Desplegable = ({ texto }) => {
  return (
    <div className="Container">
      <button className="Button">
        {texto}
      </button>
      <ul className="menu">
        <li>Home</li>
        <li>Mis Mensajes</li>
        <li>Opción 3</li>
      </ul>
    </div>
  );
};

export default Desplegable;