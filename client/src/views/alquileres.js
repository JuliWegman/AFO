import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../css/alquileres.css';

const Alquileres = ({ setIDoficina, setHamburguesa, usuario }) => {
  const [alquileres, setAlquileres] = useState([]);
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    async function getData() {
      console.log('Inicio de la carga de datos');
      try {
        const res = await axios.get(`/usuario/${usuario.id_usuario}/alquileres`);
        console.log('Datos recibidos:', res.data);
        if (Array.isArray(res.data)) {
          setAlquileres(res.data);
          console.log('Alquileres establecidos:', res.data);
          setAbierto(true);
        } else {
          console.error('Datos recibidos no son un arreglo:', res.data);
          setAlquileres([]);
        }
      } catch (error) {
        console.error('Error al obtener los alquileres:', error);
        setAlquileres([]);
      }
    }
    getData();
    setHamburguesa()
  }, []);

 

  if (!abierto) {
    console.log('Componente no está abierto.');
    return null;
  }

  return (
    <div className="container">
      <div className="titulo">
        <h1>Mis Alquileres</h1>
      </div>
      {alquileres.length > 0 ? (
        <div className="fila">
          {alquileres.map((alquiler) => (
            <div className='alquiler' onClick={()=>{setIDoficina(alquiler.id_oficina)}}>
              <Link to='/oficina' className="link">
              <img src={alquiler.fotoOficina} alt="foto oficina" />
              <h3>{new Date(alquiler.inicio).toDateString()}</h3>
              <h4>{alquiler.oficina}</h4>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <h3>No tienes alquileres hechos</h3>
      )}
      <div className="volver">
        <Link to='/'><p>Volver a Inicio</p></Link>
      </div>
    </div>
  );
};

export default Alquileres;
