import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../componentes/header.js';
import Footer from '../componentes/footer.js';
import '../css/oficinaEnEspecial.css'
import ubicacionImg from '../logo/ubicacion.png';
import Ubicacion from '../componentes/ubicacion.js';
import area from '../logo/area.png';
import Area from '../componentes/Area.js';
import sillas from '../logo/escritorio.png';
import Sillas from '../componentes/Sillas.js';
import ambientes from '../logo/ambientes.png';
import Ambientes from '../componentes/Ambientes.js';

function OficinaEnEspecial() {
  const [oficina, setOficina] = useState({});
  const [fotoOficina, setFotoOficina] = useState([""]);
  const [duracion, setDuracion] = useState({});
  const [user, setUser] = useState({});
  const [localidad, setLocalidad] = useState({});
  const [barrio, setBarrio] = useState({});

 const off=4
 const use=1
  useEffect(() => {
    axios.get('/oficina/'+off)
    .then(res=>{setOficina(res.data);
      setLocalidad(res.data.localidad);
      setBarrio(res.data.barrio);
      setDuracion(res.data.duracion);
    })
    axios.get('/oficina/'+off+'/fotos')
    .then(res=>{setFotoOficina(res.data);})
    axios.get('/usuario/' + use)
    .then(res=>{setUser(res.data);
    })
  }, []);
  console.log(localidad.nombre)


  return (
    <div className='TODO'>
      <Header user={2}/>
      <div className='Container'>
          <div className='Cont-I'>
              <h2>{oficina.calle} {oficina.altura}, {barrio.nombre}</h2>
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
              {fotoOficina.length-3>0 ?     
                <div className='fotoDifu'>
                  <img src={fotoOficina[0].contenido}/>
                  <h2>+{fotoOficina.length-3}</h2>
                </div> :
                <div className='foto'>
                <img src={fotoOficina[0].contenido}/>
              </div>
              }
                
       
            </div>
            <div className='Card'>
              <div className='alquilar'>
                <b><h2><b>${oficina.precio} ARS</b> Por {duracion.tiempo} </h2></b>
                <button className='boton-R'>Alquilar</button>
              </div>
              <div className='datos'>
                <div className='Area'>
                  <Area img = {area}/>
                  <h4>{oficina.tamaño}m²</h4>
                </div>
                <div className='Ambientes'>
                  <Ambientes img ={ambientes}/>
                  <h4>{oficina.ambientes} Ambientes</h4>
                </div>
                <div className='Escritorio'>
                <Sillas img = {sillas}/>
                <h4>{oficina.sillas} Escritorios</h4>
                </div>
                  
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
                  <img src={user.foto}/>
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
      <div className='footer'>
        <Footer/>
      </div>
      
    </div>
  )
}
export default OficinaEnEspecial