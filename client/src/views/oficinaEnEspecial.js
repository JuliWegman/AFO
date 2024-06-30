import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../componentes/header.js';
import Footer from '../componentes/footer.js';
import '../css/oficinaEnEspecial.css'
import ubicacionImg from '../logo/ubicacion.png';
import Ubicacion from '../componentes/ubicacion.js';

function OficinaEnEspecial() {
  const [oficina, setOficina] = useState({});
  const [fotoOficina, setFotoOficina] = useState([""]);
  const [duracion, setDuracion] = useState({});
  const [fotoUser, setFotoUser] = useState({});
  const [user, setUser] = useState({});
  const [localidad, setLocalidad] = useState({});


  useEffect(() => {
    axios.get('/oficina/4')
    .then(res=>{setOficina(res.data);})
    axios.get('/oficina/4/fotos')
    .then(res=>{setFotoOficina(res.data);})
    axios.get('/oficina/4/duracion')
    .then(res=>{setDuracion(res.data);}) 
    axios.get('/usuario/1')
    .then(res=>{setFotoUser(res.data);})
    axios.get('/usuario/1')
    .then(res=>{setUser(res.data);})
    axios.get('/localidad/1')
    .then(res=>{setLocalidad(res.data);})
  }, []);
  console.log(localidad.nombre)


  return (
    <div className='TODO'>
      <Header/>
      <div className='Container'>
          <div className='Cont-I'>
              <h2>{oficina.calle} {oficina.altura}</h2>
              <div className='fotoOfi'>
                <img src={fotoOficina[0].contenido} alt="oficina"/>
                <div className='circulo'>
                  <h2>🡢</h2>
                </div>
              </div>
              <h3>{oficina.descripcion}</h3>
          </div>
          <div className='Cont-D'>
            <div className='Fotos'>
              <div className='foto'>
                <img src={fotoOficina[0].contenido}/>
              </div>
              <div className='foto'>
                <img src={fotoOficina[0].contenido}/>
              </div>
                <div className='fotoDifu'>
                  <img src={fotoOficina[0].contenido}/>
                  <h2>+3</h2>
                </div>
       
            </div>
            <div className='Card'>
              <div className='alquilar'>
                <b><h2><b>${oficina.precio} ARS</b> Por Día </h2></b>
                <button className='boton-R'>Alquilar</button>
              </div>
              <div className='datos'>
                  <h4>{oficina.tamaño}m²</h4> 
                  <h4>{oficina.ambientes} Ambientes</h4>
                  <h4>{oficina.escritorio} Escritorio</h4>
                <div className='mas'>
                  <h4>Ver Mas🡣</h4>
                </div>
              </div>
              <div className='ubicacion'>
                <Ubicacion img = {ubicacionImg}/>
              </div>
            </div>
            <div className='Card2'>
              <div className='contactar'>
                <div className='datosUser'>
                  <img src={fotoUser.foto}/>
                  <div className='texto'>
                    <h3>{user.nombre} {user.apellido}</h3>
                    <h4>{localidad.nombre}</h4>
                  </div>
                </div>
                  <button className='boton-N'>Contactar</button>
              </div>
            </div>
          </div>
      </div>
      <Footer/>
    </div>
  )
}
export default OficinaEnEspecial