import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../css/alquileres.css';

const FotosOficinas = [
  { id: 1, contenido: "https://i.ibb.co/0sV4Lc7/images.jpg" },
  { id: 2, contenido: "https://i.ibb.co/882k2cN/download.jpg" },
  { id: 3, contenido: "https://i.ibb.co/0qHxTzD/images.jpg" },
  { id: 4, contenido: "https://www.eloficial.ec/wp-content/uploads/2020/08/portada-arq-dis.png" }
];

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
  }, [usuario.id_usuario, setHamburguesa]);

  const getFotoUrl = (id) => {
    const foto = FotosOficinas.find(f => f.id === id);
    if (foto) {
      console.log(`URL de la foto para el id ${id}: ${foto.contenido}`);
      return foto.contenido;
    } else {
      console.warn(`No se encontró foto para el id ${id}`);
      return "URL_DE_FOTO_DE_RESERVA"; 
    }
  };

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
            <div className='oficina' key={alquiler.id}>
              <img src={getFotoUrl(alquiler.id_oficina)} alt="foto oficina" />
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
