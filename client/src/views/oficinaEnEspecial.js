import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../componentes/header.js';
import Footer from '../componentes/footer.js';
import '../css/oficinaEnEspecial.css'

function OficinaEnEspecial() {
  const [oficina, setOficina] = useState({});
  const [fotoOficina, setFotoOficina] = useState([""]);

  useEffect(() => {
    axios.get('/oficina/4')
    .then(res=>{setOficina(res.data)})
    axios.get('/oficina/4/fotos')
    .then(res=>{setFotoOficina(res.data);console.log(res.data);})
  }, []);


  return (
    <div className='TODO'>
      <Header/>
      <div className='Container'>
          <div className='Cont-I'>
              <h2>{oficina.calle} {oficina.altura}</h2>
              <img src={fotoOficina[0].contenido} alt=""/>
              <p>{oficina.descripcion}</p>
          </div>
          <div className='Cont-D'>
              <button className='boton-R'>Alquilar</button>
              <button className='boton-N'>Contactar</button>
            <p>HHHHHHHHH</p>
          </div>
      </div>
      <Footer/>
    </div>
  )
}
export default OficinaEnEspecial